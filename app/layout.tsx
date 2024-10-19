import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Dosis, Inter } from "next/font/google";
import Image from "next/image";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meta Diária - Gerenciado de hábitos",
  description: "Gerencie seu hábitos na palma da mão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dosis.className} ${inter.className} bg-neutral-900 mt-10 flex items-center flex-col`}
      >
        <header>
          <Image
            src="/images/logo.svg"
            width={200}
            height={200}
            alt={"logotipo"}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
