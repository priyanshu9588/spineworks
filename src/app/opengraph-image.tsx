import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Spine — The web made legible. A semantic web runtime for agents.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const commitMono = await readFile(
  join(process.cwd(), "src/app/assets/CommitMono-500.otf"),
);

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f6f6f8",
          color: "#4e5251",
          fontFamily: "Commit Mono",
          fontWeight: 500,
        }}
      >
        <div style={{ position: "absolute", top: 0, bottom: 0, left: 52, width: 1096, borderLeft: "1px solid #b7bdbb", borderRight: "1px solid #b7bdbb" }} />
        <div style={{ position: "absolute", top: 106, width: "100%", borderTop: "1px solid #b7bdbb" }} />
        <div style={{ position: "absolute", bottom: 88, width: "100%", borderTop: "1px solid #b7bdbb" }} />

        <div style={{ position: "absolute", top: 34, left: 82, fontSize: 34, letterSpacing: -2, color: "#0b7468" }}>Spine</div>
        <div style={{ position: "absolute", top: 46, right: 82, fontSize: 15, color: "#656b69" }}>A semantic web runtime for agents</div>

        <div style={{ position: "absolute", top: 178, left: 82, display: "flex", flexDirection: "column", fontSize: 90, lineHeight: 1.02, letterSpacing: -6 }}>
          <span>The web</span>
          <span>made legible.</span>
        </div>
        <div style={{ position: "absolute", left: 86, top: 412, fontSize: 19, color: "#656b69" }}>Page state. Verified actions. Clear outcomes.</div>

        <svg
          width="354"
          height="390"
          viewBox="0 0 354 390"
          style={{ position: "absolute", left: 782, top: 123 }}
        >
          <path d="M177 202C178 244 177 302 177 364" fill="none" stroke="#0b7468" strokeWidth="1.5" />
          <path d="M177 322C132 315 108 289 107 271C142 270 170 285 177 322Z" fill="#d4ebe6" stroke="#0b7468" strokeWidth="1" />
          <path d="M178 282C217 280 245 257 247 236C210 239 185 257 178 282Z" fill="#d4ebe6" stroke="#0b7468" strokeWidth="1" />
          {Array.from({ length: 16 }, (_, index) => (
            <path
              key={index}
              d="M177 173C145 138 134 67 177 34C220 67 209 138 177 173Z"
              transform={`rotate(${index * 22.5} 177 173)`}
              fill="none"
              stroke="#0b7468"
              strokeWidth="1"
              opacity="0.42"
            />
          ))}
          <circle cx="177" cy="173" r="11" fill="#f6f6f8" stroke="#0b7468" strokeWidth="1.5" />
          <circle cx="177" cy="173" r="3" fill="#0b7468" />
          <circle cx="177" cy="364" r="3" fill="#0b7468" />
          <path d="M17 20H29M23 14V26M318 343H330M324 337V349" stroke="#b7bdbb" strokeWidth="1" />
        </svg>

        <div style={{ position: "absolute", bottom: 34, left: 82, fontSize: 17, color: "#0b7468" }}>spineworks.vercel.app</div>
        <div style={{ position: "absolute", bottom: 35, right: 82, fontSize: 15, color: "#656b69" }}>Built around intent.</div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Commit Mono", data: commitMono, weight: 500, style: "normal" }],
    },
  );
}
