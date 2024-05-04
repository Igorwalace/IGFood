//react
import type { Metadata } from "next";

//fonts
import { Poppins } from "next/font/google";

//css
import "./globals.css";

//contexts
import { AppFirestore } from "./contexts/banco";
import { AppCarrinho } from "./contexts/carrinho";

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
          <AppCarrinho>
          {children}
          </AppCarrinho>
        </AppFirestore>
      </body>
    </html>
  );
}

