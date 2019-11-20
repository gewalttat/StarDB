import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';
import ErrorButton from '../error-button/error-button';
import ErrorMarker from '../error-marker/error-marker';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {

    state = {
      showRandomPlanet: true,
      hasError : false
    };
  
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
  if (this.setState.hasError) {
    return <ErrorMarker/>
  }
      const planet = this.state.showRandomPlanet ?
        <RandomPlanet/> :
        null;
  
      return (
        <div className="stardb-app">
          <Header />
          { planet }
  <div className='row mb2 button-row'>
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton/>
          </div>
          <PeoplePage />
          <PeoplePage />
          <PeoplePage />
          </div> 
      );
    }
  }