import React from 'react';
import ItemList from '../item-list/';
import {withData} from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
     getAllPeople,
     getAllStarships,
     getAllPlanets
} = swapiService;

//сама консттрукция обертки компонента-функции применяемая в listWithChildren ниже
const withChildFunction = (Wrapped, fn) => {
return (props) => {
return (
    <Wrapped {...props}>
    {fn}
    </Wrapped>
)}
};
//оборачивание itemList в функцию сразу принимающую name 
const ListWithChildren = withChildFunction(
    ItemList,
    ({name}) => <span>{name}</span>
);

//заброс в константы данных по списку получающему данные с разных гетов
//в withData можно закинуть только списки, кажется
const PersonList = withData(ListWithChildren, getAllPeople);
const PlanetList = withData(ListWithChildren, getAllPlanets)
const StarshipList = withData(ListWithChildren, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
};