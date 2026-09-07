import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

const commitMono = await readFile(
  join(process.cwd(), "src/app/assets/CommitMono-500.otf"),
);

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "999px",
            background: "#e2e4e3",
            color: "#626866",
            fontFamily: "Commit Mono",
            fontSize: 36,
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          S
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Commit Mono",
          data: commitMono,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
