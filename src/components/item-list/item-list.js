import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import Preloader from '../preloader/preloader';

export default class ItemList extends Component {
  swapiService = new SwapiService();
  
  state = {
    peopleList : null
  }
//заменяет peoplelist в стейте
  componentDidMount() {
    this.swapiService
    .getAllPeople()
    .then((peopleList) => {
    this.setState ({
      peopleList
    });
    });
  };
//возвращает в рендер пару ключ значение (ид, имя) 
  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className='list-group-item'
        key={id}
        onClick={()=> this.props.onItemSelected(id)}>
        {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    //если список персонажей не грузится рендерит лодер
    if (!peopleList) {
      return <Preloader/>;
    }
    //рендерит items как peoplelist
const items = this.renderItems(peopleList);
    return (
      <ul className="item-list list-group">
       {items}
      </ul>
    );
  }
}