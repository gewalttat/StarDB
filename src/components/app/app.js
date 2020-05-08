import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {

//мне очень лениво делать руками затычку DummySwapiService, поэтому я скатаю её в гите создателя курса  
state = {
    showRandomPlanet: true,
    //свапи кидается в стейт чтобы перерисовывать данные по клику
    swapiService : new DummySwapiService()
  };

  //кнопка смены подачи вводных данных (с апи на локальные тестовые данные)
onServiceChange = () => {
this.setState(({ swapiService }) => {
  const Service = swapiService instanceof SwapiService ? 
  DummySwapiService : SwapiService;
  console.log('switched to', Service.name);
return {
  swapiService : new Service()
};
});
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

const { getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage } = this.state.swapiService;

const personDetails = (
  <ItemDetails
    itemId={11}
    getData={getPerson}
    getImageUrl={getPersonImage} >

    <Record field="gender" label="Gender" />
    <Record field="eyeColor" label="Eye Color" />

  </ItemDetails>
);

const starshipDetails = (
  <ItemDetails
    itemId={5}
    getData={getStarship}
    getImageUrl={getStarshipImage}>

    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);

return (
  <ErrorBoundry>
  {/* присвоение провайдера всему приложению */}
  <SwapiServiceProvider value={this.state.swapiService}>
    <div className="stardb-app">
      <Header onServiceChange={this.onServiceChange}/>

      {/* по идее кусок уже не нужен, но пусть поваляется зачем нибудь
      <Row
      left={personDetails}
      right={starshipDetails} />
      */}

      <PersonDetails itemId={1}/>
      <PlanetDetails itemId={2}/>
      <StarshipDetails itemId={3}/>

      <PersonList/>
      <PlanetList/>
      <StarshipList/>

    </div>
    </SwapiServiceProvider>
  </ErrorBoundry>
);
}
}