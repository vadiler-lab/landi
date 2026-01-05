import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus - Build the Future of the Web",
  description:
    "The modern platform for building exceptional digital experiences. Ship faster, scale effortlessly, and delight your users.",
  keywords: ["web development", "platform", "deployment", "hosting", "developer tools"],
  authors: [{ name: "Nexus" }],
  openGraph: {
    title: "Nexus - Build the Future of the Web",
    description:
      "The modern platform for building exceptional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus - Build the Future of the Web",
    description:
      "The modern platform for building exceptional digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
