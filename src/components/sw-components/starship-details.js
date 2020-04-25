import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper/with-swapi-service';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
    {/*запись описания итема импортированным рекордом*/}
        <Record field = 'model' label = 'Model:' />
        <Record field = 'length' label = 'Length:' />
        <Record field = 'crew' label = 'Crew:' />
      </ItemDetails>
      );
    }

//мапит ключи на конкретные значения внутри сервиса
// шоб не тянуть каждый раз всю бд целиком
const mapMethodsToProps = (swapiService) => {
  return {
    getData : swapiService.getStarship,
    getImageUrl : swapiService.getStarshipImage
  }
}
//экспорт всего на внешние модули
export default withSwapiService(StarshipDetails, mapMethodsToProps);