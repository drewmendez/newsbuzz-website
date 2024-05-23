import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import ToggleContextProvider from "@/context/ToggleState";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NewsBuzz",
    template: "%s | NewsBuzz",
  },
  description: "Browse news articles all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fdfdfd] font-body text-base">
        <ToggleContextProvider>
          <Header />
          <MobileMenu />
          {children}
          <Footer />
        </ToggleContextProvider>
      </body>
    </html>
  );
}
