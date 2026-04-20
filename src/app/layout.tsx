import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burros.AI | Production-Grade AI Agent Orchestration",
  description: "Orchestrate your AI agent fleet with Corral (Control Plane) and Burro Runner (Edge Execution).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
