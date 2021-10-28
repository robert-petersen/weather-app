import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Forcast from "./components/Forcast";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>

          <Route path="/" exact>
            <Search 

            />
          </Route>

          <Route path="/forcast" exact>
            <Forcast 

            />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
