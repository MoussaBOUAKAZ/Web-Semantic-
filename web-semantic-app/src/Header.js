
function Header({ showSideBar }) {
  return (
    <header className="App-header">
      <img
        src="./SideBarIcon.png"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        onClick={showSideBar}
        alt="Sidebar Toggle"
      />
      <p>
        Explore Your Graphe
      </p>
    </header>
  );
}

export default Header;
