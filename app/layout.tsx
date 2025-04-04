import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Board'n Pass Aero Guild Player Rank",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  publisher: "BP Aero Guild",
  authors: [
    {
      name: "Yonathan Simbolon",
      url: "https://www.linkedin.com/in/yonathan-simbolon-850229221/",
    },
  ],
  applicationName: "BPAG Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
