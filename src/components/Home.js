import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather1 from "../images/weather1.svg";
import { FaSearch } from "react-icons/fa";

const Home = ({ results, setResults }) => {
  const [ searchValue, setSearchValue ] = useState("");
  const [ isFetching, setIsFetching ] = useState(false);
  const [ disabled, setDisabled ] = useState(true);

  const getLocationData = (location) => {
    setIsFetching(true);
    axios
    .get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchValue}&days=7&aqi=no&alerts=no`)
    .then((res) => {
      console.log(res.data)
      setResults(res.data);
      setIsFetching(false);
    })
    .catch((err) => {
      console.log("error:", err);
      setIsFetching(false);
    });
  }

  const onChange = (evt) => {
    setSearchValue(evt.target.value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    getLocationData(searchValue);
  }

  useEffect(() => {
    if ( searchValue.length > 0 ) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  }, [searchValue]);

  return (
    <main className="home">
      <section className="home_about">        
        <h1>View any locations current weather as well a forcast of the next few days</h1>
        <img className="weather_img" src={Weather1} alt="person viewing a weather forcast" />
      </section>
      <section className="home_search">
        <h2>Enter a city name or postal code to find the weather results your looking for!</h2>
        <form onSubmit={onSubmit}>
          <input 
            value={searchValue}
            onChange={onChange}
            name="searchValue"
            type="text"
            placeholder="Search"
          />
          <button disabled={disabled} ><FaSearch /></button>
        </form>
      </section>
    </main>
  )
}

export default Home;
