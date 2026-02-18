import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

// Définition des polices
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Iman Ghatami | Senior Software Architect",
  description: "The Architect & The Guardian - Portfolio",
  icons: {
    icon: '/iman_ghatami.ico',
    shortcut: '/iman_ghatami.ico',
    apple: '/iman_ghatami.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${montserrat.variable}`}>
      <body className="bg-deepSpace text-slateGray font-sans antialiased selection:bg-kotlinIndigo selection:text-white">
        {children}
      </body>
    </html>
  );
}
