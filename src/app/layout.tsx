import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Voyage",
  description:
    "Voyage is a cutting-edge travel assistant chatbot designed to revolutionize your trip planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body>{children}</body>
    </html>
  );
}
