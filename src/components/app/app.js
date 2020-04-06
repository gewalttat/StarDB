import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';
import {swapiServiceProvider} from '../swapi-service-context';
import './app.css';

export default class App extends Component {

swapiService = new SwapiService();

//тоже видимо уже не применяется но пусть пока полежит  
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
return (
  <ErrorBoundry>
  {/* присвоение провайдера всему приложению */}
  <swapiServiceProvider value={this.swapiService}>
    <div className="stardb-app">
      <Header />

      {/* по идее кусок уже не нужен, но пусть поваляется зачем нибудь
      <Row
      left={personDetails}
      right={starshipDetails} />
      */}

      <PersonDetails itemId={Math.floor(Math.random()*25)+2}/>
      <PlanetDetails itemId={Math.floor(Math.random()*25)+2}/>
      <StarshipDetails itemId={Math.floor(Math.random()*25)+2}/>

      <PersonList/>
      <PlanetList/>
      <StarshipList/>

    </div>
    </swapiServiceProvider>
  </ErrorBoundry>
);
}
}