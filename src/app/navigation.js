'use client';
import { useEffect, useState } from 'react';
import "./globals.css";

export default function navigation() {
    const [mobileMenu, setMobileMenu] = useState(true);
    const [mobileNav, setMobileNav] = useState();
    const [mobileFrame, setMobileFrame] =useState();
    
    useEffect(() => {
        setMobileNav(document.getElementById("mobile-menu"));
        setMobileFrame(document.getElementById("mobile-frame"));
    }, [mobileNav]);
    
    
    const touchMenu = () => {
        if(mobileMenu) {
            mobileNav.classList.replace("menu-open", "menu-close");
            mobileFrame.classList.remove("mobile-frame-state");
            setMobileMenu(false);
        } else {
            mobileNav.classList.replace("menu-close", "menu-open");
            mobileFrame.classList.add("mobile-frame-state");
            setMobileMenu(true);
        }
    }

    return (
        <div>
            <header className="mobile-view">

                <div className="nav-var">
                    <div className="logo" href="/"><a>DS_HOME</a></div>
                    <div className="nav-menu">
                    <ul>
                        <li>
                        <a className="item" href="/">Home</a>
                        </li>
                        <li>
                        <a className="item" href="About">About</a>
                        </li>
                        <li>
                        <a className="item" href="Project">Project</a>
                        </li>
                    </ul>
                    </div>
                    {/* 모바일 메뉴 */}
                    <div id='mobile-menu' className="menu-open" onClick={touchMenu}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    {/* 모바일 메뉴 */}
                </div>
            </header>


            <div id='mobile-frame' className="mobile-frame-state">
                <div className="mobile-list-frame">
                    <ul className="mobile-list">
                        <li>  
                            <a href="/">Home</a>
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
            </div>
        </div>
    )
}