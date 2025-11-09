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
import mountFuji from "./images/mount fuji.jpeg";
import operaHouse from "./images/operaHouse.jpeg";
import Geilord from "./images/GeirangerfJord.jpeg";
import data from "./data";
export default function App() {
  const travels=data.map((item)=>{
    return <Entry 
    key = {item.id}
    entry = {item}
    // {...item} 
    />
  })
    return (
        <>
          <Header/>
          {/* <Entry img = {{src : mountFuji , alt : "mountFuji"}}
           city = "JAPAN" link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu
" heading="Mount Fuji" date= "12 Jan,2021-24 Jan,2021" content="
Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."

           /> */}

           {travels}
          {/* <Entry img = {{src : operaHouse,alt : "operaHouse"}}/>
          <Entry img = {{src : Geilord,alt : "Geilord"}}/> */}
        </>
    )
} 