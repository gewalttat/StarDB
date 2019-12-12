import React, { Component } from 'react';
import Row from '../row'
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from "../error-boundry";

import './app.css';
import ItemDetails from '../item-details/item-details';

export default class App extends Component {

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
const personDetails = (
  <ItemDetails itemId={11}/>
);
const starshipDetails = (
  <ItemDetails itemId={5}/>
)

    return (
      <ErrorBoundry>
        <div className='stardb-app'>
          <Header />
 <Row
 left = {personDetails}
 right = {starshipDetails}/>
 </div>
      </ErrorBoundry>
    );
  }
}
