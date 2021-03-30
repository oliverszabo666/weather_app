import React, { useState, useEffect } from "react";
import "./style/content-display.scss";
import Loading from "./components/Loading/Loading";
import Background from "./components/Background/Background";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import Title from "./components/CountryTitle/Title";
import TemperatureCard from "./components/WeatherDash/TemperatureCard";
import WeatherCard from "./components/WeatherDash/WeatherCard";
import MinMaxCard from "./components/WeatherDash/MinMaxCard";
import SunRiseSet from "./components/WeatherDash/SunRiseSet";

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ae7068f0dff719f2f25f33f12886cc1`;

  const FetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();

    console.log("got data:", json);

    if (json.cod === 200) {
      setData(json);
    } else {
      alert("not found");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (city !== "") {
      setLoading(true);
      setData(null);
      setTimeout(() => {
        FetchData();
      }, 3000);
    }
  }, [city]);

  return (
    <div className="App">
      <Background city={city} />

      <div className="select-input-container">
        <div className="select">
          <select
            id="city"
            name="city"
            defaultValue=""
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            <option value="" disabled hidden>
              Choose from Favorite Cities...
            </option>
            <option value="Budapest">Budapest, Hungary</option>
            <option value="Tokyo">Tokyo, Japan</option>
            <option value="Tarvisio">Tarvisio, Italy</option>
            <option value="Bled">Bled, Slovenia</option>
            <option value="Moab">Moab, USA</option>
            <option value="Honolulu">Honolulu, USA</option>
            <option value="Denpasar">Denpasar, Indonesia</option>
            <option value="Vancouver">Vancouver, Canada</option>
          </select>
        </div>
        <Autocomplete setCity={setCity} />
      </div>

      {data && (
        <div className="content-container">
          <Title data={data} />
          <div className="dash-container">
            <div className="flex-container">
              <TemperatureCard data={data} />
              <MinMaxCard data={data} />
            </div>
            <WeatherCard data={data} />
            <SunRiseSet data={data} />
          </div>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default App;
