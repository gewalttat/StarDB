import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import './people-page.css';
import SwapiService from "../../services/swapi-service";
import ErrorMarker from '../error-marker/error-marker';

//компонент-контейнер
const Row = ({left, right}) => {
  return (
    //задает стили для заменяемых элементов
    //т.к. это бутстрап, left/right не означает именно фиксацию лево/право, т.к. блоки будут двигаться 
    //вместе с изменением размера страницы
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
{right}        
      </div>
    </div>
  );
}
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
    getData={this.swapiService.getAllPeople}
    renderItem = {({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`} />
  );

  const personDetails = (
    <PersonDetails personId={this.state.selectedPerson} />
  );
      return (
      <Row left={itemList} right={personDetails}/>
      );
    }
  }