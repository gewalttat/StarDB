import React, { Component } from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Preloader from "../preloader/preloader";

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
//функция может возвращать другую функцию
//картинка
const withData = (View, getData) => {
  return class extends Component  {
    state = {
      data : null
    };

    componentDidMount() {
  //запрос на данные 
      getData()
        .then((data) => {
          //обновление стейта айтемлист полученными данными
          this.setState({
            data
          });
        });
    }
    render() {
      const { data } = this.state;
//отображает лодер если нет данных
    if (!data) {
      return <Preloader />;
    }
      //ловит всё что передалось из app в итемлист
      return <View {...this.props} data={data}/>
    }
  }
};
//данные с сервиса
const {getAllPeople} = new SwapiService();
//понятия не имею для чего нужно было это разделение дающее независимость
export default withData(ItemList, getAllPeople);