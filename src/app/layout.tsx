import type { Metadata } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/components/customComponents/Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Homies Stay",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.svg" />
        </head>
        <body className={inter.className}>
          <Provider>
            <Toaster />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
