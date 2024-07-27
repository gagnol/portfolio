"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import TransitionProvider from "@/components/transitionProvider";
import { THEME, MODE } from "@/constant/products"; 
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [accentColor, setAccentColor] = useState(THEME[0].accent);
  const [appearance, setAppearance] = useState(MODE[0].appearance);
  return (
    <html lang="en">
      <body className={inter.className}>
      <Theme appearance={appearance} accentColor={accentColor}>
     <TransitionProvider  setAccentColor={setAccentColor} >
        {children}
     </TransitionProvider>
        </Theme>
        </body>
    </html>
  );
}
