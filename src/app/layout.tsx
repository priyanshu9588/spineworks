import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const commitMono = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/commit-mono/files/commit-mono-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/commit-mono/files/commit-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/commit-mono/files/commit-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/commit-mono/files/commit-mono-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-commit-mono",
  display: "swap",
  preload: true,
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Spine",
  description: "A semantic web runtime for agents: compact page state, verified actions, and explicit outcomes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${commitMono.variable} overscroll-none scroll-smooth`}
    >
      <body className="min-w-80 overscroll-none bg-canvas font-mono tracking-[-.015em] antialiased">
        {children}
      </body>
    </html>
  );
}
