import React from "react";
import { FaCloud, FaSun, FaSnowflake, FaCloudSun } from "react-icons/fa";

const WeatherCard = (props) => {
  const weatherList = () => {
    return props.data.weather.map((w) => (
      <div className="top2" key={w.id}>
        {(() => {
          switch (w.main) {
            case "Clouds":
              return (
                <h2 className="weather">
                  <FaCloud />
                </h2>
              );
            case "Clear":
              return (
                <h2 className="weather">
                  <FaSun />
                </h2>
              );
            case "Snow":
              return (
                <h2 className="weather">
                  <FaSnowflake />
                </h2>
              );
            default:
              return (
                <h2 className="weather">
                  <FaCloudSun />
                </h2>
              );
          }
        })()}
        <p>{w.description}</p>
      </div>
    ));
  };
  return (
    <div className="dash-weather">
      {weatherList()}

      <div className="bottom2">
        <p>Humidity: {props.data.main.humidity}%</p>
        <p>Pressure: {props.data.main.pressure} hPa</p>
      </div>
    </div>
  );
};

export default WeatherCard;
