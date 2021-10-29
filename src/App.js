import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Forcast from "./components/Forcast";

function App() {
  const [ results, setResults ] = useState({});

  return (
    <div className="App">
      <Router>
        <NavBar 
          results={results} 
          setResults={setResults}
        />
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
