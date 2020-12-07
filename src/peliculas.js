import "./peliculas.css"

const Peliculas = (props) => {
  console.log(props);
  return (
    <div className="card">
      <h1>{props.titulo}</h1>
      <img src={props.cartel} alt="" />
      <p>{props.sinopsis}</p>
    </div>
  );
};




export default Peliculas;
