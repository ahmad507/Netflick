import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="/netflick.png" alt="Netflick"></img>
            <img className="nav__avatar" src="/logo.png" alt="Netflick"></img>
        </div>
    )
}

export default Nav
