import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import ErrorMarker from '../error-marker/error-marker';

export default class PeoplePage extends Component {
swapiService = new SwapiService();
  
state = {
selectedPerson: Math.floor(Math.random()*25)+2,
hasError: false
};
  
componentDidCatch(error, info) {
this.setState({
hasError: true
});
}
  
    onPersonSelected = (selectedPerson) => {
      this.setState({ selectedPerson });
    };
  
    render() {
      if (this.state.hasError) {
        return <ErrorMarker />;
      }
  
      return (
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPeople}
              renderItem = {({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      );
    }
  }