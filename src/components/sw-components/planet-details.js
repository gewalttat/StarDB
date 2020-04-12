import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';

//переброс кишок компонентов из app в эту обёртку, по сути игра с полиморфизмом, но удобно, конечно
//соответственно в арр все это дело удалено, хз почему в курсе не удаляют
const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
          {
            ({ getPlanet, getPlanetImage }) => {
              return (
        <ItemDetails 
        itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}>
        <Record field = 'population' label = 'Population:' />
        <Record field = 'diameter' label = 'Diameter:' />
        <Record field = 'rotationPeriod' label = 'Rotation period:' />
      </ItemDetails>
      );
    }
  }
</SwapiServiceConsumer>
    );
};

//экспорт всего на внешние модули
export default PlanetDetails;