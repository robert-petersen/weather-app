import React from 'react';

const DayForecast = ({ day }) => {
  const dateArr = day.date.split("-");

  return (
    <section className="day_forecast">
      <h1>{`${dateArr[1]}/${dateArr[2]}`}</h1>
      <img src={day.day.condition.icon} alt={day.day.condition.text} />
      <h3>{day.day.condition.text}</h3>
      <h2>{`Max ${day.day.maxtemp_f}F`}</h2>
      <h2>{`Min ${day.day.mintemp_f}F`}</h2>
      <h4>{`${day.day.daily_chance_of_rain}% Chance of Rain`}</h4>
      <h4>{`${day.day.daily_chance_of_snow}% Chance of Snow`}</h4>
    </section>
  )
}

export default DayForecast
