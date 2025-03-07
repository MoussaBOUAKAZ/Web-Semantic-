import { useState } from "react";

function Header({ showSideBar }) {
  return (
    <header className="App-header">
      <img
        src="./SideBarIcon.png"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={showSideBar}
        alt="Sidebar Toggle"
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  );
}

export default Header;
