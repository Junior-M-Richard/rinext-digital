import { ImageResponse } from "next/og";

export const alt = "RINEXT DIGITAL — Next Digital World";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "70px 80px",
          borderTop: "16px solid #0D64BA",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#0D64BA",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            R
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: "-0.02em",
            }}
          >
            RINEXT DIGITAL
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#0D64BA",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Next Digital World • RDC (Uvira) & Burundi
          </div>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.12,
            }}
          >
            Web Développement, SEO, Audit Réseau & Matériel IT
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #f1f5f9",
            paddingTop: "24px",
            fontSize: "22px",
            color: "#475569",
          }}
        >
          <span>Fondée par Junior M. Richard</span>
          <span style={{ color: "#0D64BA", fontWeight: 700 }}>
            WhatsApp : +257 77 172 580
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}