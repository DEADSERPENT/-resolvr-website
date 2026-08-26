import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(155deg, #fffdfa 0%, #f6f1e7 55%, #f0e9da 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "#fffdfa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(170,145,105,0.35)",
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 99,
                background: "#b93d22",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 6,
              color: "#251f18",
            }}
          >
            RESOLVR
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1,
            color: "#251f18",
            maxWidth: 980,
          }}
        >
          Turn GitHub PR reviews into verified, approved fixes.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 26,
            color: "rgba(37,31,24,0.72)",
            maxWidth: 860,
          }}
        >
          The bridge between a GitHub PR review and the coding agent that
          fixes it.
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 48,
          }}
        >
          {["Copilot", "VS Code", "JetBrains", "Claude Code"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.9)",
                fontSize: 20,
                color: "#4c6f47",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
