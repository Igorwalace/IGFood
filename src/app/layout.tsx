//react
import type { Metadata } from "next";

//fonts
import { Poppins } from "next/font/google";

//css
import "./globals.css";

//contexts
import { AppFirestore } from "./contexts/banco";
import { AppCarrinho } from "./contexts/carrinho";

//shadcn
import { Toaster } from "@/components/ui/toaster"
import { AppFirebaseAuth } from "./contexts/providers/auth";

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
        <AppFirebaseAuth>
        <AppFirestore>
          <AppCarrinho>
          {children}
          </AppCarrinho>
        </AppFirestore>
        </AppFirebaseAuth>
        <Toaster />
      </body>
    </html>
  );
}

