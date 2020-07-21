import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Navigation, Footer, Reservation, Rates, CompleteTeam, Login, Signup, NotFoundPage } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Reservation />} />
          <Route path="/Rates" exact component={() => <Rates />} />
          <Route path="/CompleteTeam" exact component={() => <CompleteTeam />} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
