export default function SideBar(props) {
  const { data, handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <button className="apod-button" onClick={() => window.open("https://science.nasa.gov/apod/", "_blank", "noopener noreferrer")}>
          TODAY's APOD
        </button>
        <p className="note">Sometimes this won't load due to NASA's internal API servers going down. Please be patient. If it doesn't load, you may use this button to view the APOD for today.</p>
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
