import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "IgorFood",
  description: "Projeto Igor Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href='/icon.png' />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
