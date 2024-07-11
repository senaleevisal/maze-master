import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maze Master",
  description: "Empower the future, master the maze.",
  creator: "NIBM",
  publisher: "NIBM National Institute Of Business Management",
  applicationName: "Maze Master",
  keywords: ["Maze-Master","mase-master","Maze Master","maze master","NIBM","nibm"],
  manifest: "https://maze-master.com",
  authors: [
    {url:'https://github.com/senaleevisal',name:"senalee Visal"},
    {url:'https://github.com/nethsaraPrabash',name:"Nethsara Prabash"}
  ]
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
