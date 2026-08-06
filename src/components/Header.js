import React  from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header(){

    return(
        <div className="Header">
            <Link className="title" to="/">
            Riana's Concert Archive
            </Link>
            <a className="portfolio-link" href="https://rianashahid.com" target="_blank">
                RS
            </a>
        </div>
    )
}

export default Header;