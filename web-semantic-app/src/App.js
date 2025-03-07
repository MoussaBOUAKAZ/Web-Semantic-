import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  const [SideBarToggle, setSideBarToggle] = useState(true);

  const toggleSideBar = () => {
    setSideBarToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <Header showSideBar={toggleSideBar} />
      <SideBar classes={`SideBar ${SideBarToggle ? "active" : ""}`} />
    </div>
  );
}

export default App;
