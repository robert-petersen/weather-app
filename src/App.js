import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Forcast from "./components/Forecast";

function App() {
  const [ results, setResults ] = useState({});

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route path="/" exact>
            <Home 
              results={results}
              setResults={setResults}
            />
          </Route>

          <Route path="/forcast" exact>
            <Forcast 
              results={results}
            />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
