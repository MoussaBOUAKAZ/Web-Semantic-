import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
function App() {
  const [SideBarToggle, setSideBarToggle] = useState(true);
  const [queryStructure, setQueryStructure] = useState("");

  const toggleSideBar = () => {
    setSideBarToggle((prev) => !prev);
  };

  const handleChange = (event) => {
    setQueryStructure(event.target.value);
  };

  const dispalyQuery = (Query) => {
    setQueryStructure(Query);
  };
  const executeQuery = () => {
    // ajouter une logique pour ca
  };
  return (
    <div className="App">
      <Header showSideBar={toggleSideBar} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar
          classes={`SideBar ${SideBarToggle ? "active" : ""}`}
          showQueryStructure={dispalyQuery}
        />
        <div className={`QuerySpace ${queryStructure ? "show" : ""}`}>
          <textarea value={queryStructure} onChange={handleChange}></textarea>

          <div className="QueryActions">
            <button onClick={executeQuery}>Run Query</button>
            <button onClick={() => setQueryStructure("")}>Reset</button>
          </div>
        </div>

        {/* {Boolean(queryStructure)   && (
          <div className="QuerySpace show">
            <textarea value={queryStructure} onChange={handleChange}></textarea>

            <div className="QueryActions">
            <button onClick={executeQuery}>Run Query</button>
              <button onClick={() => setQueryStructure("")}>Reset</button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default App;
