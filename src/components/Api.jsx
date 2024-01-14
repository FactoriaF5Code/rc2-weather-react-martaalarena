import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import './Api.css'

export default function Api() {
  // const [search, setSearch] = useState("");
  // const [values, setValues] = useState("");
  // const [icon, setIcon] = useState("");

  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Oviedo&lang=es&units=metric&appid=a259fc7cb99fb6a5662bfe50c2ddeef0'


const getData = async () => {
  await fetch(URL)
  .then(response => {return response.json()})
  .then( data => {
    //console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
}

const search = (e) => {
  console.log(e.target.value)
}

  useEffect(() => {
  getData()
  }, []);

  return (
    <>
     <div className="container">
        <h1 className="titulo">Prediccion del tiempo</h1>
        <section className="contenedor_busqueda">
          <input className="input" type="text" placeholder="El tiempo en ..." autoFocus/>
          <button className="lupa" onClick={search}>
            <SearchIcon />
          </button>
        </section>
      </div>
    </>
  );
}
