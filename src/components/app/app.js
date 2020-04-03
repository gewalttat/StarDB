import React, { Component } from 'react';
import Row from '../row/';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import getAllPeople from '../hoc-helper/with-data';
import getAllStarships from '../item-list/';
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import ItemList from '../item-list';
import './app.css';

export default class App extends Component {

swapiService = new SwapiService();
  
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

      const { getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage } = this.swapiService;

      const personDetails = (
        //приложение иногда вылетает из-за отсутствия рандомных ид, но так всё равно прикольней
  <ItemDetails 
  itemId={Math.floor(Math.random()*25)+2} 
  getData={getPerson}
  getImageUrl={getPersonImage}>
  <Record field = 'name' label = 'Name:' />
  <Record field = 'gender' label = 'Gender:' />
  <Record field = 'eyeColor' label = 'Eye Color:' />
</ItemDetails>
);
//инстанс позволяющий не хардкодить свойства итема
const starshipDetails = (
  <ItemDetails 
  itemId={Math.floor(Math.random()*25)+2}
  getData={getStarship}
  getImageUrl={getStarshipImage}>
  <Record field = 'model' label = 'Model:' />
  <Record field = 'length' label = 'Length:' />
{/* почему то не отображает стоимость */}
  <Record field = 'costInCredits' label = 'Cost:' />
</ItemDetails>
);

return (
  <ErrorBoundry>
    <div className="stardb-app">
      <Header />

      <Row
      left={personDetails}
      right={starshipDetails} />

      <ItemList
        getData={getAllPeople}
        onItemSelected={() => {}}>

        { ({name}) => <span>{name}</span> }
      </ItemList>

      <ItemList
        getData={getAllStarships}
        onItemSelected={() => {}}>

        { ({name}) => <span>{name}</span> }
      </ItemList>

    </div>
  </ErrorBoundry>
);
}
}