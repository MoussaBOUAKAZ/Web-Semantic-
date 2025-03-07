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
    { IconLink: "importer.png", Label: "Import 1" },
    { IconLink: "importer.png", Label: "Import 2" },
    { IconLink: null, Label: "Tools" },
    { IconLink: "importer.png", Label: "Import 3" },
    { IconLink: "importer.png", Label: "Import 4" },
    { IconLink: "importer.png", Label: "Import 5" },
    { IconLink: "importer.png", Label: "Import 6" },
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
