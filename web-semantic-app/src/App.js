import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import QueryIndex from "./QueryIndex";
function App() {
  const [SideBarToggle, setSideBarToggle] = useState(true);
  const [queryStructure, setQueryStructure] = useState("");

  const toggleSideBar = () => {
    setSideBarToggle((prev) => !prev);
  };
  const [text, setText] = useState("Hello, this is default text!");

  const handleChange = (event) => {
    setQueryStructure(event.target.value);
  };

  const dispalyQuery = (Query) => {
    setQueryStructure(Query);
  };
  return (
    <div className="App">
      <Header showSideBar={toggleSideBar} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar
          classes={`SideBar ${SideBarToggle ? "active" : ""}`}
          showQueryStructure={dispalyQuery}
        />
        <div className="QuerySpace">
          <textarea value={queryStructure} onChange={handleChange}></textarea>

          <div className="QueryActions">
            <button >
              Run Query
            </button>
            <button onClick={() => setQueryStructure("")}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
