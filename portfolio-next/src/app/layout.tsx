import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Kothari - AI Engineer & Data Scientist",
  description: "Portfolio of Aditya Kothari, an AI Engineer and Data Scientist passionate about machine learning, data analytics, and building intelligent systems.",
  keywords: ["AI", "Machine Learning", "Data Science", "Full-Stack Development", "Portfolio"],
  authors: [{ name: "Aditya Kothari" }],
  openGraph: {
    title: "Aditya Kothari - AI Engineer & Data Scientist",
    description: "Portfolio showcasing AI projects, machine learning solutions, and data science work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
