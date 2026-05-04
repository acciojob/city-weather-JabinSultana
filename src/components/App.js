import React, { useState } from "react";
import './../styles/App.css';

const API_KEY = "YOUR_API_KEY_HERE"; // replace this

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!query) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <input
        className="search"
        type="text"
        placeholder="Enter city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={fetchWeather}>Search</button>

      {weather && weather.main && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}

    </div>
  );
};

export default App;
