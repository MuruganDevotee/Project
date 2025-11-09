import React from "react";
import "./entry.css";
import map from '../images/map.png';

export default function Entry(props) {
    const entry=props.entry;
    console.log(entry);
    return (
        <>
        <div className="Entry-box">
        <div className="Entry-box1">
            <img src={entry.img.src} alt={entry.img.alt} className="cardImg"></img>
           
        </div>
        <div className="Entry-box2">
            <div className="subHead">
                <div className="imgCity">
            <img src= {map} alt="Map" className="header--icon" />
            <small className="cityName">{entry.country}</small>
            </div>
            <>
            <a href={entry.googleMapsLink}>View on Google Maps</a>
</>
            </div>
            <div className="contentbox">
            <h2 className="heading">{entry.title}</h2>
            <h3 className="subHeading">{entry.dates}</h3>
            <p className="content">{entry.text}</p>
            </div>
        </div>
        </div>
        </>
    )
}