import React from "react";
import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <img src="./images/globe.png" className="header--icon" />
            <small className="header--title">my travel journal.</small>
        </header>
    )
} 