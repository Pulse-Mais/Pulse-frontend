import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
// import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulse Mais",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={twMerge(inter.className, "bg-white text-midnight-blue-950 h-screen")}>
        {children}
        <ToastContainer 
          position="top-right"
        />
      </body>
    </html>
  );
}
