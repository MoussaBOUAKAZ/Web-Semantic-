import "./App.css";
import SideBarItem from "./SideBarItem";

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="SideBar">
      <SideBarItem
        IconLink="importer.png"
        Label="Import"
        onClick={() => handleItemClick(index)}
      />
      <SideBarItem
        IconLink="importer.png"
        Label="Import"
        onClick={() => handleItemClick(index)}
      />
      <SideBarItem
        IconLink="importer.png"
        Label="Import"
        onClick={() => handleItemClick(index)}
      />
      <SideBarItem
        IconLink="importer.png"
        Label="Import"
        onClick={() => handleItemClick(index)}
      />
      <SideBarItem
        IconLink="importer.png"
        Label="Import"
        onClick={() => handleItemClick(index)}
      />
      <SideBarItem
        IconLink="importer.png"
        Label="Import"
        onClick={() => handleItemClick(index)}
      />
    </div>
  );
}

export default SideBar;
