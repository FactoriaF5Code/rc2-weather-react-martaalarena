import { useEffect } from "react";

export default function Api() {
    const [data, setData] = useState()

  const Apikey = "a259fc7cb99fb6a5662bfe50c2ddeef0";

  useEffect(() => {
    fetch(
        "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid= " + Apikey
    );

    .then((reponse) => response.json())
    .then((data) => {
        setData(Array.isArray(data.))
    })
  });

  return <div>Api</div>;
}
