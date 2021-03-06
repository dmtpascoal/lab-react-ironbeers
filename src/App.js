import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddBeer} />
      </Switch>
    </div>
  );
}

export default App;
