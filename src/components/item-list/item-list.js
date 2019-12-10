import React, { Component } from 'react';
import './item-list.css';
import Preloader from '../preloader/preloader';

export default class ItemList extends Component {
  
  state = {
    itemList : null
  }
//заменяет peoplelist в стейте
  componentDidMount() {
const {getData } = this.props;
    getData().then((itemList) => {
    this.setState ({
      itemList
    });
    });
  };
//возвращает в рендер пару ключ значение (ид, имя) 
  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.children(item);
      return (
        <li className='list-group-item'
        key={id}
        onClick={()=> this.props.onItemSelected(id)}>
        {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    //если список персонажей не грузится рендерит лодер
    if (!itemList) {
      return <Preloader/>;
    }
    //рендерит items как peoplelist
const items = this.renderItems(itemList);
    return (
      <ul className="item-list list-group">
       {items}
      </ul>
    );
  }
}