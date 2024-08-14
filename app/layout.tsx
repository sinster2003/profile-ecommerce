import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilProvider from "../components/RecoilProvider";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile.fyi - but on sale!",
  description: "Buy profile templates to your liking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://p1.edge.duggup.com/logo/favicon.svg" rel="icon"/>
      </head>
      <body className={`${inter.className} relative`}>
        <RecoilProvider>
          <Navbar/>
          <div className="mx-20">
            {children}
          </div>
        </RecoilProvider>
      </body>
    </html>
  );
}
