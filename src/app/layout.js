import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/shared/Container";
import { Toaster } from "react-hot-toast"; // ✅ 1. Import Toaster

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ✅ 2. Add Toaster here so it can be seen from any page */}
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1F2937',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 'bold',
              borderRadius: '99px',
              padding: '12px 24px',
            },
          }}
        />
        
        <Container>{children}</Container>
      </body>
    </html>
  );
}