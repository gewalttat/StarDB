import React, { Component } from 'react';
import ErrorButton from '../error-button/error-button';
import SwapiService from '../../services/swapi-service';

import './item-details.css';

//для того чтоб не хардкодить свойства айтема
//получает итем, поле и отображение в юи
//используется в деталях итема в дальнейшем (собственно всё видно в теле рекорда)
export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{ item[field] }</span>
  </li>
  );
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  //видимо уже мусор
  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId || 
          this.props.getData !== prevProps.getData || 
             this.props.getImageUrl !== prevProps.getImageUrl) {
    this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

//получает ид итема, по нему стейт картинки изменяется на ид
    getData(itemId)
      .then((item) => {
        this.setState({ item, image: getImageUrl(item) });
      });
  }

  render() {
    const { item, image } = this.state;
    //если итем не определяется выкидывает надпись
    //надо бы то же самое для картинки сделать, наверное
  if (!item) {
    return <p>бд приказала долго жить</p>
  };

    const { name } = item;
//возвращает чайлд из реакт.чилдрен.мап (потому что чайлдом может быть все что угодно бла бла) 
    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="character"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
          { /* чилдрен мап итерируется по пропс.чилдрен и возвращает для каждого чайлда %что_то% */ }
           {React.Children.map(this.props.children, (child) => {
             return React.cloneElement(child, {item});
           })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
