import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  const [SideBarToggle, setSideBarToggle] = useState(false);

  const toggleSideBar = () => {
    setSideBarToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <Header showSideBar={toggleSideBar} />
      {SideBarToggle && <SideBar />}
    </div>
  );
}

export default App;
