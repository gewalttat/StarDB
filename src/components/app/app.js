import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import Row from '../row';
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
    swapiService : new SwapiService()
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
  
render() {
  const planet = this.state.showRandomPlanet ?
  <RandomPlanet/> :
  null;
return (
  <ErrorBoundry>
  {/* присвоение провайдера всему приложению */}
  <SwapiServiceProvider value={this.state.swapiService}>
    <div className="stardb-app">
      <Header onServiceChange={this.onServiceChange}/>
      {planet}
      {<Row left={<PersonList/>} right={<PersonDetails itemId={1}/>} />}
      {<Row left={<PlanetList/>} right={<PlanetDetails itemId={2}/>} />}
      {<Row left={<StarshipList/>} right={<StarshipDetails itemId={3}/>} />}
    </div>
    </SwapiServiceProvider>
  </ErrorBoundry>
);
}
}