import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Stockup",
  description: "Your stock trading app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"font-sans antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
