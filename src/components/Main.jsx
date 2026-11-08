export default function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.image} alt={data.title} className="bgImage" />
    </div>
  );
}
