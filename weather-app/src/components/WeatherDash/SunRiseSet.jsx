import React from "react";

const SunRiseSet = (props) => {
  const date = new Date();
  const dateOffset = date.getTimezoneOffset();

  date.setMinutes(date.getMinutes() + props.data.timezone / 60 + dateOffset);
  const localHour = date.getHours();
  const localMinute = date.getMinutes();

  let sunrise = new Date(props.data.sys.sunrise * 1000);
  const sunset = new Date(props.data.sys.sunset * 1000);

  const sunriseHours = sunrise.getHours();
  const sunriseMinutes = sunrise.getMinutes();

  const sunsetHours = sunset.getHours();
  const sunsetMinutes = sunset.getMinutes();

  return (
    <div className="dash-weather">
      <div>
        <h2>Current Time:</h2>
        <p>
          {localHour}:{localMinute}
        </p>
      </div>
      <div>
        <h2>Sunrise</h2>
        <p>
          {sunriseHours}:{sunriseMinutes}
        </p>
        <h2>Sunset</h2>
        <p>
          {sunsetHours}:{sunsetMinutes}
        </p>
      </div>
    </div>
  );
};

export default SunRiseSet;
