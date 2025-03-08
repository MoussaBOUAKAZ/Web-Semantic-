import "./App.css";
import SideBarItem from "./SideBarItem";
import { useState } from "react";

function SideBar({ classes }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const items = [
    { IconLink: null, Label: "Data Service" },
    { IconLink: "importer.png", Label: "Import Graphe" },
    { IconLink: "importer.png", Label: "Import 2" },
    { IconLink: null, Label: "Query Tools" },
    { IconLink: "openqueyIcon.png", Label: "Open Query" },
    { IconLink: "readQueryIcon.png", Label: "SELECT Query" },
    { IconLink: "askIcon.png", Label: "ASK Query" },
    { IconLink: "constructIcon.png", Label: "CONSTRUCT Query" },
    { IconLink: "describeIcon.png", Label: "DESCRIBE Query" },
    { IconLink: "insertIcon.png", Label: "INSERT Query" },
    { IconLink: "deleteIcon.png", Label: "DELETE Query" },
    { IconLink: "deleteIcon.png", Label: "DELETE WHERE Query" },
    { IconLink: "insertIcon.png", Label: "INSERT WHERE Query" },
    { IconLink: "insertIcon.png", Label: "DELETE + INSERT Query" },
    { IconLink: "insertIcon.png", Label: "INSERT INTO GRAPH Query" },
    { IconLink: "deleteIcon.png", Label: "DELETE FROM GRAPH Query" },
    { IconLink: "deleteIcon.png", Label: "DROP GRAPH Query" },
    { IconLink: "filterIcon.png", Label: "FILTER Query" },
    { IconLink: "optionaIcon.png", Label: "OPTIONAL  Query" },
    { IconLink: "unionIcon.png", Label: "UNION  Query" },
    { IconLink: "bindIcon.png", Label: "BIND  Query" },
    { IconLink: "grouping.png", Label: "GROUP BY & COUNT  Query" },
  ];

  return (
    <div className={classes}>
      {items.map((item, index) => (
        <SideBarItem
          key={index}
          IconLink={item.IconLink}
          Label={item.Label}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default SideBar;
