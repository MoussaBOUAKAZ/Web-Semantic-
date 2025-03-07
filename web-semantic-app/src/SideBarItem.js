import "./App.css";

function SideBarItem({IconLink,Label, isActive, onClick }) {
  return (
    <div className={`SideBarItem ${isActive ? "active" : ""}`} onClick={onClick} >
      <img src={IconLink} alt="Icon"></img>
      <span>{Label}</span>
    </div>
  );
}

export default SideBarItem;
