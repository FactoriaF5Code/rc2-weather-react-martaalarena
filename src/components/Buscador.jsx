import { useState } from "react";

export default function Buscador(newLocation) {
  const [city, setCity] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(city === "" || !city) return;

    newLocation(city);
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}></form>
      <div>
        <input
          type="text"
          placeholder="ciudad"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </div>
    </div>
  );
}
