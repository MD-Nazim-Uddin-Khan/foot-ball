import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home';
import Booking from './component/Booking';

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home" >

          <Home />
        </Route>

        <Route path="/booking/:dynamic">
          <Booking />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
