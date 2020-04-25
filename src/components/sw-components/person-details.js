import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper/with-swapi-service';

//переброс кишок компонентов из app в эту обёртку, по сути игра с полиморфизмом, но удобно, конечно
//соответственно в арр все это дело удалено, хз почему в курсе не удаляют
const PersonDetails = (props) => {
    return (
                <ItemDetails {...props}>
                <Record field = 'name' label = 'Name:' />
                <Record field = 'gender' label = 'Gender:' />
                <Record field = 'eyeColor' label = 'Eye Color:' />
              </ItemDetails>       
    );
};
//мапит ключи на конкретные значения внутри сервиса
// шоб не тянуть каждый раз всю бд целиком
const mapMethodsToProps = (swapiService) => {
  return {
    getData : swapiService.getPerson,
    getImageUrl : swapiService.getPersonImage
  }
}

//экспорт всего на внешние модули
export default withSwapiService(PersonDetails, mapMethodsToProps);