import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';
import { PeoplePage, StarshipsPage, PlanetPage } from '../pages';


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
return (
  <ErrorBoundry>
  {/* присвоение провайдера всему приложению */}
  <SwapiServiceProvider value={this.state.swapiService}>
    <div className="stardb-app">
      <Header onServiceChange={this.onServiceChange}/>
      <RandomPlanet/> 
      <PeoplePage/>
      <PlanetPage/>
      <StarshipsPage/>
    </div>
    </SwapiServiceProvider>
  </ErrorBoundry>
);
}
}