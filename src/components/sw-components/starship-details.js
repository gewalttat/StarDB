import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
          {
            ({ getStarship, getStarshipImage }) => {
              return (
        <ItemDetails
        //итемИД не жестко закоден, я вообще выставил рандом (который иногда крашится) 
        itemId={itemId}//{Math.floor(Math.random()*25)+2}
        //получение с гета который получает с сервиса
        getData={getStarship}
        //туда же
        getImageUrl={getStarshipImage}>
    {/*запись описания итема импортированным рекордом*/}
        <Record field = 'model' label = 'Model:' />
        <Record field = 'length' label = 'Length:' />
        <Record field = 'crew' label = 'Crew:' />
      </ItemDetails>
      );
    }
  }
</SwapiServiceConsumer>
);
};


//экспорт всего на внешние модули
export default StarshipDetails;