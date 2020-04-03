import React from 'react';
import './item-list.css';
//докинулся импорт withData потому что удобнее(?)
import withData from '../hoc-helper/with-data';
import SwapiService from "../../services/swapi-service";

//механика
 const ItemList = (props) => {
    const {data, onItemSelected, children:renderLabel} = props;
    const items = data.map((item) => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  };
//данные с сервиса
const { getAllPeople } = new SwapiService();
const { getAllStarships } = new SwapiService();
//понятия не имею для чего нужно было это разделение дающее независимость
export default withData (ItemList, getAllPeople, getAllStarships);