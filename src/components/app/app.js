import React, { Component } from 'react';
import Row from '../row'
import Header from '../header';
import RandomPlanet from '../random-planet';
//неймед экспорт
import ItemDetails, {Record} from '../item-details/item-details';
import ErrorBoundry from "../error-boundry";
import SwapiService from '../../services/swapi-service';
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

      const { getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

      const personDetails = (
        //приложение иногда вылетает из-за отсутствия рандомных ид, но так всё равно прикольней
  <ItemDetails 
  itemId={Math.floor(Math.random()*25)+2} 
  getData={getPerson}
  getImageUrl={getPersonImage}>
  <Record field = 'gender' label = 'Gender:' />
  <Record field = 'eyeColor' label = 'Eye Color:' />
</ItemDetails>
);
//инстанс позволяющий не хардкодить свойсва итема
const starshipDetails = (
  <ItemDetails 
  itemId={Math.floor(Math.random()*25)+2}
  getData={getStarship}
  getImageUrl={getStarshipImage}>
  <Record field = 'model' label = 'Model:' />
  <Record field = 'length' label = 'Length:' />
  <Record field = 'costInCredits' label = 'Cost:' />
</ItemDetails>
);

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
