import React from "react";
import logo from "../assets/Airbnb.png"

function Navbar() {
    return(
        <div className="navbar">
            <nav>
                <img className="logo-image" src={logo} alt="logo" />
            </nav>
        </div>
    )
}

export default Navbar
