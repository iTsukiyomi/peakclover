import type { Metadata } from "next";
import { Cinzel, Montserrat, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BLACK CLOVER",
  description: "Black Clover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-[#e5e5e5] font-sans selection:bg-red-950/60 selection:text-white">
        {children}
      </body>
    </html>
  );
}
