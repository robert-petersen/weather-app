import React from "react";
import DayForecast from "./DayForecast";

const Forecast = ({ results }) => {
  const loacalTime = results.location.localtime.split(" ");
  const date = loacalTime[0].split("-");

  return (
    <main className="forcast">
      <div className="content_container">
        <section className="current_forcast">
          <div className="left">
            <h1>{`${date[1]}/${date[2]} - ${loacalTime[1]}`}</h1>
            <img src={results.current.condition.icon} alt={results.current.condition.text}/>
            <p>{results.current.condition.text}</p>
            <h2>{`${results.current.temp_f}F`}</h2>
            <h3>{`Feels like ${results.current.feelslike_f}F`}</h3>
          </div>
          <div className="right">
            <h1>{results.location.name}</h1>
            <h2>{`${results.location.country} - ${results.location.region}`}</h2>
            <h3>{`Winds ${results.current.wind_dir} ${results.current.wind_mph} MPH`}</h3>
            <h3>{`Humidity ${results.current.humidity}%`}</h3>
            <h3>{`Vision ${results.current.vis_miles} Miles`}</h3>
          </div>
        </section>
        <section className="future_forecast">
          <h1 className="title">3 Day Forecast</h1>
          <div className="day_container">
            { results.forecast.forecastday.map((day) => <DayForecast key={day.date} day={day} />) }
          </div>
        </section>
      </div>
    </main>
  )
}

export default Forecast;
