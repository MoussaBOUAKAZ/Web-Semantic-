import "./App.css";

function SideBarItem({IconLink,Label, isActive, onClick }) {
  return (
    <div className={`SideBarItem ${IconLink && isActive ? "active" : ""}`} onClick={onClick} >
      <img src={IconLink} alt=""></img>
      <span>{Label}</span>
    </div>
  );
}

export default SideBarItem;
