import React from 'react';
import ItemList from '../item-list/';
import {withData} from '../hoc-helper/with-data';
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

const renderName = ({name}) => <span>{name}</span>;
//тупо чтобы было
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

//оборачивание itemList в функцию сразу принимающую name 
/*const ListWithChildren = withChildFunction(
    ItemList, renderName); для понимания работы*/
//заброс в константы данных по списку получающему данные с разных гетов
//в withData можно закинуть только списки, кажется
const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople);

const PlanetList = withData(
    withChildFunction(ItemList, renderName), 
    getAllPlanets);

const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName), 
    getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};