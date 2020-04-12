import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';



//забирать геты конечно же с сервиса


//переброс кишок компонентов из app в эту обёртку, по сути игра с полиморфизмом, но удобно, конечно
//соответственно в арр все это дело удалено, хз почему в курсе не удаляют
const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
        {
            ({ getPerson, getPersonImage }) => {
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
        }
    }
</SwapiServiceConsumer>
    );
};


//экспорт всего на внешние модули
export default PersonDetails;