import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import EmotionRegistry from "../components/EmotionRegistry/EmotionRegistry";
import GlobalErrorBoundary from "@/pages/GlobalErrorBoundary/GlobalErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Planner Components",
  description:
    "A collection of reusable components for building event planning applications. Explore the various UI elements and functionalities designed to streamline event management and enhance user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EmotionRegistry>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            themes={["light", "dark"]}
            storageKey="theme"
          >
            <GlobalErrorBoundary>{children}</GlobalErrorBoundary>
          </ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
