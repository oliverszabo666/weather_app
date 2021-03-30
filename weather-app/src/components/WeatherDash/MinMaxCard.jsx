import React from "react";
import { FaThermometerFull, FaThermometerEmpty } from "react-icons/fa";

const ConvertToCelsius = (temp) => {
  return Math.floor(temp - 273.15);
};

const MinMaxCard = (props) => {
  return (
    <div className="min-max-temp">
      <div className="dash-weather">
        <p className="max">
          <FaThermometerFull />
          {ConvertToCelsius(props.data.main.temp_max)} °C
        </p>
      </div>
      <div className="dash-weather">
        <p className="min">
          <FaThermometerEmpty />
          {ConvertToCelsius(props.data.main.temp_min)} °C
        </p>
      </div>

      <div className="dash-weather">
        <div className="feels-like">
          <p>Feels like:</p>
          <p>{ConvertToCelsius(props.data.main.feels_like)} °C</p>
        </div>
      </div>
    </div>
  );
};
export default MinMaxCard;
