import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import localFont from "next/font/local";
import { Navigation } from "./components/navigation";
import Footer from "./components/footer";

import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Nextjs Test App",
    description: "This application is for testing client-server rendering and auth testing",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={ `${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden` }>
                    <header className="bg-slate-900 text-white p-4 text-center">
                        <Navigation />
                    </header>
                    { children }
                    <footer className="bg-slate-900 text-white p-4 text-center fixed bottom-0 w-full">
                        <Footer />
                    </footer>
                </body>
            </html>
        </ClerkProvider>
    );
}
