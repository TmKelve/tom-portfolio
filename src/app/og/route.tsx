import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") ?? "Azure & Power Platform Architect";
  const subtitle = searchParams.get("subtitle") ?? "tomkelve.com";
  const tag = searchParams.get("tag") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid decorativo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Brilho azul canto superior direito */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Brilho azul canto inferior esquerdo */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", zIndex: 1 }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#3b82f6",
              boxShadow: "0 0 12px rgba(59,130,246,0.8)",
            }}
          />
          <span style={{ color: "#3b82f6", fontSize: "18px", letterSpacing: "0.15em", fontWeight: 600 }}>
            TOM KELVE
          </span>
        </div>

        {/* Conteúdo central */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", zIndex: 1 }}>
          {tag && (
            <div
              style={{
                display: "flex",
                width: "fit-content",
                backgroundColor: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "6px",
                padding: "4px 14px",
                color: "#93c5fd",
                fontSize: "15px",
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </div>
          )}

          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 50 ? "44px" : "56px",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: "900px",
              textShadow:
                "0 0 40px rgba(59,130,246,0.35)",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "#71717a", fontSize: "16px" }}>
            {subtitle}
          </span>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Azure", "Power Platform", "AI"].map((s) => (
              <span
                key={s}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  padding: "4px 10px",
                  color: "#a1a1aa",
                  fontSize: "13px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
