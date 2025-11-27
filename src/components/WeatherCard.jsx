import "./WeatherCard.css";

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <div>
        <h2>{data.location.name}, {data.location.country}</h2>
        <h1>{data.current.temp_c}°C</h1>
        <h3>{data.current.condition.text}</h3>
        <p>Local Time: {data.location.localtime}</p>
      </div>

      <div className="right-details">
        <img src={data.current.condition.icon} />
        <p>Feels like: {data.current.feelslike_c}°C</p>
        <p>Humidity: {data.current.humidity}%</p>
        <p>Wind: {data.current.wind_kph} kph</p>
        <p>UV Index: {data.current.uv}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
