import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K. R. Kiruthick Kumar | ECE • Electronics • IoT",
  description:
    "Personal portfolio of K. R. Kiruthick Kumar — Electronics and Communication Engineering student with industry experience at Kaynes Technology India Limited.",
  icons: {
    icon: "/images/profile.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
