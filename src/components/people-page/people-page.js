import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import ErrorMarker from '../error-marker/error-marker';
import Row from '../row/row';
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

      const itemList = (
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}>
          {(i) => (
            `${i.name}`
            )}
          </ItemList>
      );

  const personDetails = (
    <PersonDetails personId={this.state.selectedPerson} />
  );
      return (
      <Row left={itemList} right={personDetails}/>
      );
    }
  }