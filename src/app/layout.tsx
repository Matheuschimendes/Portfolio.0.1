import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Chimendes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
    <head>
      <link rel="icon" href="./src/app/favicon.ico" />
    </head>
    <body className={inter.className}>{children}</body>
  </html>
  );
}
