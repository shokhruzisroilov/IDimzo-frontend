import React from "react"; // Qo‘shildi
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../assets/styles/index.css";
import AOSWrapper from "@/components/public/common/AOSWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "IDimzo | Bosh sahifa",
  description:
    "Notarial idoralar (notariat) tomonidan huquqiy harakatlarni tasdiqdash, shahodatlash va hujjat berish borasida amalga oshiriladigan ishlar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <AOSWrapper>
          {children}</AOSWrapper>
      </body>
    </html>
  );
}
