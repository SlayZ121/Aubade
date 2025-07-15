// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar.jsx";
import { Toaster } from "react-hot-toast"; // ✅ ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aubade — your gentle diary",
  description: "Write your softest thoughts in a warm digital space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              zIndex: 99999,
            },
          }}
        />

        <main className="min-h-screen bg-gradient-to-b from-pink-50 to-base-200">
          {children}
        </main>
      </body>
    </html>
  );
}
