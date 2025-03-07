import "./App.css";

function SideBarItem({IconLink,Label}) {
  return (
    <div className="SideBarItem" >
      <img src={IconLink} alt="Icon"></img>
      <span>{Label}</span>
    </div>
  );
}

export default SideBarItem;
