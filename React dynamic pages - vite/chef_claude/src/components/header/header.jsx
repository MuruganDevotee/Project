import React from "react";
import chef from '../../assets/chef.png';
import './header.css';
export default function Header() {
  return (
    <header className="header">
      <img src={chef} className="logo"></img>
        <div className="title">Chef Claude</div>
    </header>
  );
}