/* eslint-disable @typescript-eslint/no-require-imports -- This isolated Node check loads transpiled route modules. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const { NextRequest } = require("next/server");

function loadTs(filename, overrides = {}) {
  const source = fs.readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const loaded = { exports: {} };
  new Function("require", "module", "exports", output)(
    (name) => overrides[name] || require(name), loaded, loaded.exports,
  );
  return loaded.exports;
}

const contact = loadTs("lib/contact.ts");
const { POST } = loadTs("app/api/contact/route.ts", { "@/lib/contact": contact });
const good = {
  name: "Test Visitor", email: "test@example.com", company: "",
  service: contact.contactServices[0], description: "A controlled automated integration check.", website: "",
};
const originalFetch = global.fetch;
const secretNames = ["RESEND_API_KEY", "CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"];
const originalEnv = Object.fromEntries(secretNames.map((name) => [name, process.env[name]]));
let fetchCalls = 0;
let passed = 0;

function request(body = good, headers = {}) {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { origin: "http://localhost:3000", "content-type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

async function expectStatus(name, req, expected) {
  const response = await POST(req);
  assert.equal(response.status, expected, name);
  assert.equal(response.headers.get("cache-control"), "no-store", name);
  const body = await response.json();
  assert.equal(body.ok, expected === 200, name);
  passed++;
  return body;
}

(async () => {
  try {
    global.fetch = async () => { throw new Error("Unexpected network call"); };
    for (const name of secretNames) delete process.env[name];

    assert.equal(contact.validateContact(good).valid, true); passed++;
    assert.equal(contact.validateContact({ ...good, email: "bad\r\nBcc: x@example.com" }).valid, false); passed++;
    assert.equal(contact.validateContact({ ...good, company: "x".repeat(121) }).valid, false); passed++;
    assert.equal(contact.validateContact({ ...good, description: "x".repeat(5001) }).valid, false); passed++;
    await expectStatus("foreign origin", request(good, { origin: "https://other.example" }), 403);
    await expectStatus("mismatching public Host", request(good, { host: "127.0.0.1:3000" }), 403);
    await expectStatus("forwarded-host cannot override public Host", request(good, { host: "127.0.0.1:3000", "x-forwarded-host": "localhost:3000" }), 403);
    await expectStatus("malformed Host", request(good, { host: "localhost:3000/extra" }), 403);
    await expectStatus("cross-scheme origin", request(good, { origin: "https://localhost:3000" }), 403);
    await expectStatus("null origin", request(good, { origin: "null" }), 403);
    await expectStatus("cross-site fetch", request(good, { "sec-fetch-site": "cross-site" }), 403);
    await expectStatus("unsupported type", request(good, { "content-type": "text/plain" }), 415);
    await expectStatus("malformed JSON", request("{"), 400);
    await expectStatus("non-object JSON", request("[]"), 400);
    await expectStatus("oversize actual body", request("x".repeat(24001)), 413);
    await expectStatus("oversize declared body", request(good, { "content-length": "24001" }), 413);
    await expectStatus("honeypot", request({ ...good, website: "https://spam.example" }), 400);
    const invalid = await expectStatus("invalid fields", request({ ...good, name: "", service: "Invented service", description: "short" }), 400);
    assert.ok(invalid.errors.name && invalid.errors.service && invalid.errors.description); passed++;
    await expectStatus("unconfigured delivery", request(), 503);
    await expectStatus("normalized Next URL localhost with public Host and Origin 127", request(good, { host: "127.0.0.1:3000", origin: "http://127.0.0.1:3000" }), 503);

    process.env.RESEND_API_KEY = "fake-test-key-no-network";
    process.env.CONTACT_FROM_EMAIL = "sender@example.com";
    process.env.CONTACT_TO_EMAIL = "recipient@example.com";
    global.fetch = async (url, options) => {
      fetchCalls++;
      assert.equal(url, "https://api.resend.com/emails");
      const sent = JSON.parse(options.body);
      assert.equal(sent.reply_to, good.email);
      assert.deepEqual(sent.to, ["recipient@example.com"]);
      assert.match(sent.text, /A controlled automated integration check/);
      return Response.json({ id: "controlled-test-id" });
    };
    const success = await expectStatus("provider-confirmed acceptance", request(), 200);
    assert.equal(success.id, "controlled-test-id"); passed++;
    global.fetch = async () => Response.json({ message: "Private provider error must not leak" }, { status: 401 });
    const failed = await expectStatus("provider failure", request(), 502);
    assert.ok(!failed.message.includes("Private provider error")); passed++;
    global.fetch = async () => Response.json({});
    await expectStatus("missing provider receipt", request(), 502);
    global.fetch = async () => { throw new Error("Private network failure"); };
    await expectStatus("network failure", request(), 502);
    assert.equal(fetchCalls, 1); passed++;
    console.log(`Passed ${passed} contact validation and endpoint checks. All provider calls were mocked; no email was sent.`);
  } finally {
    global.fetch = originalFetch;
    for (const name of secretNames) {
      if (originalEnv[name] === undefined) delete process.env[name];
      else process.env[name] = originalEnv[name];
    }
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
