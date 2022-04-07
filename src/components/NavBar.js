import React from "react";
import { Link } from "react-router-dom";
import "./../App.css"

function NavBar() {
    return <>
        <ul className="navbar">
            <Link to="/" className="navlinks">
                <li>Home</li>
            </Link>
            <Link to="/about" className="navlinks">
                <li>About</li>
            </Link>
            <Link to="/contact" className="navlinks">
                <li>Contact</li>
            </Link>
        </ul>
    </>
};

export default NavBar