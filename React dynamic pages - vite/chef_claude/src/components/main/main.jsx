import React from "react";
import './main.css';

export default function Main() {
  return (
    <main className="main">
        <form className="form">
      <input className="inputtype" type="text" aria-label = "Add ingredient"/>
      <button className="btn" placeholder = 'e.g. oregano'>+ Add ingredient</button>
      </form>
    </main>
  );
}