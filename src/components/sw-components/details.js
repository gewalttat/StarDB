import React from 'react';
import ItemDetails, {Record} from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

//забирать геты конечно же с сервиса
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapiService;

//переброс кишок компонентов из app в эту обёртку, по сути игра с полиморфизмом, но удобно, конечно
//соответственно в арр все это дело удалено, хз почему в курсе не удаляют
const PersonDetails = ({itemId}) => {
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

const StarshipDetails = ({itemId}) => {
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
};

const PlanetDetails = ({itemId}) => {
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
};

//экспорт всего на внешние модули
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};