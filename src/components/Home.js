import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather1 from "../images/weather1.svg";
import { FaSearch } from "react-icons/fa";
import { CircularProgress } from '@mui/material';
import { useHistory } from "react-router";

const Home = ({ results, setResults }) => {
  const [ searchValue, setSearchValue ] = useState("");
  const [ isFetching, setIsFetching ] = useState(false);
  const [ disabled, setDisabled ] = useState(true);
  const [ error, setError ] = useState("");
  const history = useHistory();

  const getLocationData = (location) => {
    setError("");
    setIsFetching(true);
    axios
    .get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchValue}&days=3&aqi=no&alerts=no`)
    .then((res) => {
      console.log(res.data)
      setResults(res.data);
      setIsFetching(false);
      setSearchValue("");
      history.push("/forcast");
    })
    .catch((err) => {
      console.log("error:", err);
      setError("Couldn't find any results. Make sure you entered things correctly.");
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
      <section className="home_content">        
        <h1>Weather Now</h1>
        <h2>Enter a city name or postal code to find the weather results your looking for!</h2>
        <form onSubmit={onSubmit}>
          <input 
            value={searchValue}
            onChange={onChange}
            name="searchValue"
            type="text"
            placeholder="Search Location"
          />
          <button disabled={disabled} ><FaSearch className="icon"/></button>
        </form>
        <div className="search_state">
          { isFetching ? <CircularProgress /> : <p>{error}</p> }
        </div>
        <img className="weather_img" src={Weather1} alt="person viewing a weather forcast" />
      </section>
    </main>
  )
}

export default Home;
