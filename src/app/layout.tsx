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

const title = "Spine — The web made legible";
const description = "A semantic web runtime for agents: compact page state, verified actions, and explicit outcomes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://spinenew.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Spine",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: "/opengraph-image", alt: "Spine — The web made legible. A semantic web runtime for agents." }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${commitMono.variable} overscroll-none`}
    >
      <body className="min-w-0 overscroll-none bg-canvas font-mono tracking-[-.015em] antialiased">
        {children}
      </body>
    </html>
  );
}
