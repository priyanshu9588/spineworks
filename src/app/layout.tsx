import type { Metadata } from "next";
import "@fontsource/open-runde/400.css";
import "@fontsource/open-runde/500.css";
import "@fontsource/open-runde/600.css";
import "./globals.css";

export const metadata: Metadata = { title: "Spine, the semantic runtime for the agent-native web", description: "Spine gives agents a compact, reliable view of the web." };

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body>{children}</body></html>; }
