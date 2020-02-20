import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './presentationals/MainScreen'
import AddressViewComp from './containers/AddressViewComp'
import WeatherComp from './containers/WeatherComp'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
        <Route exact path='/' component={MainScreen} />
        <Route exact path='addressView' component={AddressViewComp} />
        <Route exact path='weather' component={WeatherComp} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;