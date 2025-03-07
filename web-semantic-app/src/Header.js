import { useState } from "react";
import "./App.css";

function Header() {
    const [SideBarToggle,useSideBarToggle]=useState(false)
    const SideBarClickHandler= ()=>{
        useSideBarToggle(!SideBarToggle)
    }
  return (
    <header className="App-header">
      <img
      src="./SideBarIcon.png" style={{width:'25px', height:'25px'}} 
      onClick={SideBarClickHandler} >
      </img>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      
    </header>
  );
}

export default Header;
