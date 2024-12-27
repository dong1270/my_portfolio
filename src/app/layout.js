import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DS_Home",
  description: "a brief introduction",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        
        {children}
        
        <footer/>
      </body>
    </html>
  );
}
