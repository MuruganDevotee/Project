// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <header className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </header>
//   );
// }

// export default App;


import React from "react";
import "./App.css"
import Header from "./components/header";
import Entry from "./components/entry";

export default function App() {
    return (
        <>
          <Header/>
          <Entry/>
        </>
    )
} 