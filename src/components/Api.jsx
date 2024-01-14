import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Api.css";

export default function Api() {
  const [search, setSearch] = useState("");
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");

  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=Oviedo&lang=es&units=metric&appid=a259fc7cb99fb6a5662bfe50c2ddeef0";

  const getData = async () => {
    await fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.cod >= 400) {
          setValues(false);
        } else {
          setValues(data);
          console.log(data.weather.main);
          setIcon(data.weather.main);
        }
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const busqueda = (e) => {
    if (e.key === "Enter" || onclick) {
      console.log(e.target.value);
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="container">
        <h1 className="titulo">Prediccion del tiempo</h1>
        <section className="contenedor_busqueda">
          <input
            className="input"
            type="text"
            placeholder="El tiempo en ..."
            onKeyDown={busqueda}
            autoFocus
          />
          <button className="lupa" onClick={busqueda}>
            <SearchIcon />
          </button>
        </section>
      </div>
      <div className="card">
        {values ? (
          <div className="card_container">
            <h1 className="city_name">{values.name}</h1>
            <p className="tempeture">{values.main.temp}</p>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </>
  );
}
