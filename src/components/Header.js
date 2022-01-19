import React, { useEffect, useState } from 'react'

import "./Header.scss";
import { BiMenuAltRight } from 'react-icons/bi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggle = () => {
        setMenuOpen((p) => !p)
    }


    return (
        <header className="header">
            <div className="header_content">
                <h2 className="header_content_logo">Nikoloz Gabrichidze</h2>

                <nav className={`${"header_content_nav"} ${menuOpen ? "ismenu" : ""}`}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/education">Education</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                    </ul>

                </nav>
                <div className="header_content_toggle">
                    <BiMenuAltRight onClick={menuToggle} />
                </div>
            </div>

        </header>
    )
}

export default Header
