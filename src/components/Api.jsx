import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Api.css";
import icons from "./icons";

export default function Api() {
  const [search, setSearch] = useState("oviedo");
  const [values, setValues] = useState("");
  const [icon, setIcon] = useState("");

  const key = "a259fc7cb99fb6a5662bfe50c2ddeef0"
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${key}`;

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
          console.log(data.weather[0].main);
          setIcon(data.weather[0].main);
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
        <div className="card">
          {values ? (
            <div className="card_container">
              <h1 className="city_name">{values.name}</h1>
              <p className="temp">{values.main.temp}&deg;</p>
              <img className="icon" src={icons(icon)} alt="icon" />
              <div className="footer">
                <p className="temp_minmax">
                  {values.main.temp_min}&deg; |{values.main.temp_max}&deg;
                </p>
              </div>
            </div>
          ) : (
            <h1>{"city not found"}</h1>
          )}
        </div>
      </div>
    </>
  );
}
