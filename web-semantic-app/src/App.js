import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import GraphVis from "./GraphVis";
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

  const graphData = {
    nodes: [
      { id: 1, label: "Person", color: "#ff6f61" },
      { id: 2, label: "Alice", color: "#6b5b95" },
      { id: 3, label: "Bob", color: "#feb236" },
    ],
    edges: [
      { from: 1, to: 2, label: "hasName" },
      { from: 1, to: 3, label: "knows" },
    ],
  };

  return (
    <div className="App">
      <Header showSideBar={toggleSideBar} />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar
          classes={`SideBar ${SideBarToggle ? "active" : ""}`}
          showQueryStructure={dispalyQuery}
        />
        <div
          style={{
            display: "flex",
            marginLeft: "20px",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={`QuerySpace ${queryStructure ? "show" : ""}`}>
            <h2>Query Space</h2>
            <h2>Query Space</h2><h2>Query Space</h2>
            <textarea value={queryStructure} onChange={handleChange}></textarea>

            <div className="QueryActions">
              <button onClick={executeQuery}>Run Query</button>
              <button onClick={() => setQueryStructure("")}>Reset</button>
            </div>
          </div>
          <div style={{ padding: "20px", color: "#000" }}>
            <h2>Graph Visualization</h2>
            <GraphVis data={graphData} />
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
    </div>
  );
}

export default App;
