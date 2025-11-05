import React from "react";
import "./contact.css";

import phoneIcon from "../images/phone-icon.png";
import mailIcon from "../images/mail-icon.png";

export default function Contact(props) {
    return (
        <article className="contact-card">
            <div className="portrait">
                <img
                    src={props.img}
                    alt={props.name ? `Photo of ${props.name}` : "contact portrait"}
                />
            </div>

            <h3>{props.name}</h3>

            <div className="info-group">
                <img src={phoneIcon} alt="phone icon" />
                <p>{props.phone}</p>
            </div>

            <div className="info-group">
                <img src={mailIcon} alt="mail icon" />
                <p>{props.email}</p>
            </div>
        </article>
    );
}