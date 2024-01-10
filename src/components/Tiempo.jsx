import { React, useState } from "react";
import "./Buscador.css";
import Buscador from "./Buscador";

export default function Tiempo() {
  let urlTiempo =
    "https://api.openweathermap.org/data/2.5/weather?appid=a259fc7cb99fb6a5662bfe50c2ddeef0&lang=es";
  let cityUrl = "&q=";

  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=a259fc7cb99fb6a5662bfe50c2ddeef0&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    urlTiempo = urlTiempo + cityUrl + loc;

    await fetch(urlTiempo)
      .then((Response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setshow(false);
      });
    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((Response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setWeather(forecastData);

        setLoading(false);
        setshow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setshow(false);
      });
  };

  return (
   <React.Fragment>
<Buscador

newLocation = {getLocation}

/>
   </React.Fragment>
    );
}

