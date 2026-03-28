import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion-provider";
import { IntroAnimation } from "@/components/intro-animation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soham Zinjad | Full-Stack Developer",
  description:
    "Portfolio of Soham Zinjad, a full-stack developer building real-time applications, scalable backends, and modern web interfaces with React, Node.js, and MongoDB."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-ink">
        <MotionProvider>
          <IntroAnimation />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
