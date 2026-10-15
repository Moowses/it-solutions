export const contactServices = [
  "IT Leadership & Project Delivery",
  "Web & Business Application Development",
  "Infrastructure & IT Operations",
  "Automation & AI Integration",
] as const;

export const contactLimits = {
  name: 100,
  email: 254,
  company: 120,
  description: 5000,
} as const;

export type ContactField = "name" | "email" | "company" | "service" | "description";
export type ContactErrors = Partial<Record<ContactField, string>>;

export interface ContactValues {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
}

export function hasSameOrigin(
  origin: string | null,
  host: string | null,
  requestUrl: Pick<URL, "protocol" | "origin">,
): boolean {
  if (!origin || !["http:", "https:"].includes(requestUrl.protocol)) return false;
  // The browser's Host is authoritative here: Next's dev URL can normalize
  // 127.0.0.1 to localhost. Do not substitute an untrusted forwarded-host header.
  if (host && /[\s/\\?#@]/.test(host)) return false;
  try {
    const expected = host
      ? new URL(`${requestUrl.protocol}//${host}`).origin
      : requestUrl.origin;
    const submitted = new URL(origin);
    return submitted.origin === origin && submitted.origin === expected;
  } catch {
    return false;
  }
}

type ValidationResult =
  | { valid: true; values: ContactValues }
  | { valid: false; errors: ContactErrors };

export function isValidEmail(value: string): boolean {
  return (
    value.length <= contactLimits.email &&
    /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value) &&
    !/[\r\n\u0000]/.test(value)
  );
}

export function validateContact(input: unknown): ValidationResult {
  const record = input && typeof input === "object" && !Array.isArray(input)
    ? (input as Record<string, unknown>)
    : {};
  const read = (field: ContactField) =>
    typeof record[field] === "string" ? record[field].trim() : "";
  const values: ContactValues = {
    name: read("name"),
    email: read("email"),
    company: read("company"),
    service: read("service"),
    description: read("description"),
  };
  const errors: ContactErrors = {};

  if (!values.name) errors.name = "Please enter your name.";
  else if (values.name.length > contactLimits.name || /[\r\n\u0000]/.test(values.name))
    errors.name = "Please use a name of 100 characters or fewer, on one line.";

  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email address.";

  if (values.company.length > contactLimits.company || /[\r\n\u0000]/.test(values.company))
    errors.company = "Please use a company name of 120 characters or fewer, on one line.";

  if (!contactServices.some((service) => service === values.service))
    errors.service = "Please select a service.";

  if (values.description.length < 20)
    errors.description = "Please describe your project in at least 20 characters.";
  else if (values.description.length > contactLimits.description || /\u0000/.test(values.description))
    errors.description = "Please keep your description within 5,000 characters.";

  return Object.keys(errors).length ? { valid: false, errors } : { valid: true, values };
}
