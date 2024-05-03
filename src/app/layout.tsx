import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppFirestore } from "./contexts/banco";

const poppins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "IGFood",
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
      <body className={poppins.className}>
        <AppFirestore>
          {children}
        </AppFirestore>
      </body>
    </html>
  );
}

