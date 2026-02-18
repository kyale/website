import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "../../app/globals.css";

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

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'nl' }];
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    return (
        <div className="pt-24">
            {children}
        </div>
    );
}
