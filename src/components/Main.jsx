export default function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/apod/apod/2026/november/GerlacheKocherMassif_Sans.jpg?w=1280&h=1280&fit=crop&crop=faces%2Cfocalpoint" alt={data.title} className="bgImage" />
    </div>
  );
}
