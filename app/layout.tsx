import type { Metadata } from "next";
import "./globals.css";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/win95.css";

export const metadata: Metadata = {
  title: "Don't update",
  description: "Try to skip it",
  generator: "marcelo",
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
