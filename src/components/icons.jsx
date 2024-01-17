function Icons(icon) {
  switch (icon) {
    case "Thunderstorm":
      icon = "../../public/icons/thunderstorms-rain.svg";
      break;
    case "Drizzle":
      icon = "../../public/icons/drizzle.svg";
      break;
    case "Rain":
      icon = "../../public/icons/rain.svg";
      break;
    case "Snow":
      icon = "../../public/icons/snow.svg";
      break;
    case "Clear":
      icon = "../../public/icons/clear-day.svg";
      break;
    case "Foggy":
      icon = "../../public/icons/fog.svg";
      break;
    case "Haze":
      icon = "../../public/icons/haze.svg";
      break;
    case "Smoke":
      icon = "../../public/icons/smoke.svg";
      break;
    case "Clouds":
      icon = "../../public/icons/cloudy.svg"
      break;
    // default:
    //     icon = '../../public/icons/clear-day.svg'
    //     break;
  }

  return icon;
}

export default Icons;
