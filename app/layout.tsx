import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K. R. Kiruthick Kumar | ECE Portfolio",
  description:
    "Portfolio of K. R. Kiruthick Kumar, Electronics and Communication Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
