import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-Commerce Admin",
  description: "E-Commerce Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
