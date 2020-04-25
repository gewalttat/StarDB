import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper/with-swapi-service';

//переброс кишок компонентов из app в эту обёртку, по сути игра с полиморфизмом, но удобно, конечно
//соответственно в арр все это дело удалено, хз почему в курсе не удаляют
const PlanetDetails = (props) => {
  return (
        <ItemDetails {...props}>
        <Record field = 'population' label = 'Population:' />
        <Record field = 'diameter' label = 'Diameter:' />
        <Record field = 'rotationPeriod' label = 'Rotation period:' />
      </ItemDetails>
      );
    }

//мапит ключи на конкретные значения внутри сервиса
// шоб не тянуть каждый раз всю бд целиком
const mapMethodsToProps = (swapiService) => {
  return {
    getData : swapiService.getPlanet,
    getImageUrl : swapiService.getPlanetImage
  }
}

//экспорт всего на внешние модули
export default withSwapiService(PlanetDetails, mapMethodsToProps);