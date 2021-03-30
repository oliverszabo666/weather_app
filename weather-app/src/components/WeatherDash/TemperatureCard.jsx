import React from "react";
import { FaWind } from "react-icons/fa";

const ConvertToCelsius = (temp) => {
  return Math.floor(temp - 273.15);
};

const TemperatureCard = (props) => {
  return (
    <div className="top-flex">
      <div className="dash-weather">
        <h2 className="dash-title-value">
          {ConvertToCelsius(props.data.main.temp)} °C
        </h2>
      </div>
      <div className="dash-weather">
        <h2 className="wind">
          <FaWind />
        </h2>
        <p>{props.data.wind.speed} km/h</p>
      </div>
    </div>
  );
};
export default TemperatureCard;
