export default function SideBar(props) {
  const { handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Martian Landscape</h2>
        <div>
          <p>
            Description
            <p>Insert text about image here loll</p>
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
