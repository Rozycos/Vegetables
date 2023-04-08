import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header =() =>{
    return (
        <>
            <header className="header">
                <div className="header container">
                    <Link className="page__logo" to="/">
                        <img src={logo} alt="Vegetables.com"/>
                    </Link>
                    <nav className="page__nav">
                        <ul className="page__nav-list">
                            <li><Link className="page__nav-link">Main</Link></li>
                            <li><Link className="page__nav-link">Info</Link></li>
                            <li><Link className="page__nav-link">About</Link></li>
                            <li><Link className="page__nav-link">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;