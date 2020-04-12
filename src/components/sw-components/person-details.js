import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import withSwapiService from '../hoc-helper/with-swapi-service';

//переброс кишок компонентов из app в эту обёртку, по сути игра с полиморфизмом, но удобно, конечно
//соответственно в арр все это дело удалено, хз почему в курсе не удаляют
const PersonDetails = ({itemId, swapiService}) => {
  const {getPerson, getPersonImage} = swapiService;
    return (
                <ItemDetails 
                itemId={itemId}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field = 'name' label = 'Name:' />
                <Record field = 'gender' label = 'Gender:' />
                <Record field = 'eyeColor' label = 'Eye Color:' />
              </ItemDetails>       
    );
};

//экспорт всего на внешние модули
export default withSwapiService(PersonDetails);