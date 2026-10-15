import { ImageResponse } from "next/og";
export const alt = "Karl Mosses. IT Leadership, Development and Business Solutions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#f7f5ef", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "68px 80px", color: "#292b25" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}><span>Karl Mosses</span><span style={{ color: "#4f6243", fontSize: 22 }}>karlmosses.com</span></div>
      <div style={{ fontSize: 72, letterSpacing: -3, lineHeight: 1.1, maxWidth: 900 }}>Technology that works for your business.</div>
      <div style={{ display: "flex", borderTop: "1px solid #bfc2b3", paddingTop: 28, fontSize: 22 }}>IT Leadership / Development / Business Solutions</div>
    </div>, size,
  );
}
