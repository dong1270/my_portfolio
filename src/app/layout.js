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
        {/* <header className="mobile-view"> */}
{/* 
          <div className="nav-var">
            <div className="logo" href="/"><a>DS_HOME</a></div>
            <div className="nav-menu">
              <ul>
                <li>
                  <a className="item" href="/my_portfolio/">Home</a>
                </li>
                <li>
                  <a className="item" href="About">About</a>
                </li>
                <li>
                  <a className="item" href="Project">Project</a>
                </li>
              </ul>
            </div>
            <div className="mobile-menu menu-open">
              <span/>
              <span/>
              <span/>
            </div>
          </div> */}

        {/* </header> */}

        {/* 모바일 메뉴 */}
        {/* <div className="mobile-frame menu-close" > */}
        {/* <div className="mobile-frame">
          <div className="mobile-list-frame">
            <ul className="mobile-list">
              <li>  
                <a href="/my_portfolio/">Home</a>
              </li>
              <li>
                <a href="About">About</a>
              </li>
              <li>
                <a href="Project">Project</a>
              </li>
            </ul>
          </div>
          <div className="mobile-backgraund"/>
        </div> */}
        {/* 모바일 메뉴 */}
        
        {children}
        
        <footer/>
      </body>
    </html>
  );
}
