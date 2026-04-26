import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burros.AI | Unleash the Herd",
  description: "Rugged agentic orchestration for industrial-grade AI workflows.",
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
