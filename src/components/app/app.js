import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorButton from '../error-button/error-button';
import ErrorMarker from '../error-marker/error-marker';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
 swapiService = new SwapiService();
    state = {
      showRandomPlanet: true,
      hasError : false
    };
  //импортирует в стейт функцию рандомной планеты
    toggleRandomPlanet = () => {
      this.setState((state) => {
        return {
          showRandomPlanet: !state.showRandomPlanet
        }
      });
    };
  
    componentDidCatch() {
      console.log('Error catch!');
this.setState({hasError : true});
    }

    render() {
      //рендерит страницу если код выполняется без ошибки
  if (this.setState.hasError) {
    //если есть ошибка бросает маркер
    return <ErrorMarker/>
  }
      const planet = this.state.showRandomPlanet ?
        <RandomPlanet/> :
        null;
  
        return (
          <div className="stardb-app">
            <Header />
            { planet }
    
            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton />
            </div>
    
            <PeoplePage />
    
            <div className="row mb2">
              <div className="col-md-6">
                <ItemList
                  onItemSelected = {this.onPersonSelected}
                  getData = {this.swapiService.getAllPlanets} 
                  renderItem = {({name, diameter, population}) => `${name} (${diameter}, ${population})`} />
              </div>
              <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson} />
              </div>
            </div>
    
            <div className="row mb2">
              <div className="col-md-6">
                <ItemList
                  onItemSelected={this.onPersonSelected}
                  getData={this.swapiService.getAllStarships}
                  renderItem = {({name, model, crew}) => `${name} (${model}, ${crew})`} />
              </div>
              <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson} />
              </div>
            </div>
    
          </div>
        );
      }
    }