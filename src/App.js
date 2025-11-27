import { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Toronto");

  const fetchWeather = async (c) => {
    const r = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${c}`);
    const d = await r.json();
    setWeatherData(d);
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const condition = weatherData?.current?.condition?.text?.toLowerCase();

  const getBG = () => {
    if (!condition) return "sun";
    if (condition.includes("snow")) return "snow";
    if (condition.includes("rain")) return "rain";
    if (condition.includes("cloud")) return "clouds";
    if (condition.includes("sun") || condition.includes("clear")) return "sun";
    return "default";
  };

  const bg = getBG();

  console.log("Condition:", condition);
  console.log("Applying background:", bg);

  return (
    <div id="background" className={bg}>
      <SearchBar onSearch={(v)=>fetchWeather(v)} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
