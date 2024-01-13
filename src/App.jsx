import "./App.css";
import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  return (
    <>
      <div className="container">
        <h1 className="titulo">Prediccion del tiempo</h1>
        <section className="contenedor_busqueda">
          <input className="input" type="text" placeholder="El tiempo en ..." />
          <button className="lupa">
            <SearchIcon />
          </button>
        </section>
      </div>
    </>
  );
}
