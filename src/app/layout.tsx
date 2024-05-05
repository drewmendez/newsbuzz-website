import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import ToggleContextProvider from "../context/ToggleState";
import MobileMenu from "../components/MobileMenu";

export const metadata: Metadata = {
  title: "NewsBuzz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body text-lg">
        <ToggleContextProvider>
          <Header />
          <MobileMenu />
          {children}
        </ToggleContextProvider>
      </body>
    </html>
  );
}
