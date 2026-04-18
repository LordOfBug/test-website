import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burros.AI - Intelligent Agent Orchestration",
  description: "Orchestrate your AI workforce with Burros, Corrals, and Blueprints.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
