import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: {
    default: "Taran Kalsi - Full-Stack Developer",
    template: "%s | Taran Kalsi",
  },
  description: "Full-Stack Developer specializing in Event & Education Management Systems",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 lg:ml-72 flex flex-col min-h-screen">
              <div className="flex-1">{children}</div>
              <Footer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}