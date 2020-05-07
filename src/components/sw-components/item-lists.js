import React from 'react';
import ItemList from '../item-list/';
import { withSwapiService } from '../hoc-helper/with-swapi-service';
import { withData } from '../hoc-helper/with-data';

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
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;
const renderPopulation = ({name, population}) => <span>{name}{', population is'} {population}</span>;

//полная хуйня 
const mapPersonMethodToProps = (swapiService) => {
return {
    getData : swapiService.getAllPeople
};
}
const mapStarshipsMethodToProps = (swapiService) => {
    return {
        getData : swapiService.getAllStarships
    };
}
const mapPlanetsMethodToProps = (swapiService) => {
        return {
            getData : swapiService.getAllPlanets
        };
}

//оборачивание itemList в функцию сразу принимающую name 
/*const ListWithChildren = withChildFunction(
    ItemList, renderName); для понимания работы*/
//заброс в константы данных по списку получающему данные с разных гетов
//в withData можно закинуть только списки, кажется

const PersonList = withSwapiService(
    withData(
    withChildFunction(ItemList, renderName)),
     mapPersonMethodToProps);

     const PlanetList = withSwapiService(
        withData(
        withChildFunction(ItemList, renderPopulation)),
         mapPlanetsMethodToProps);

         const StarshipList = withSwapiService(
            withData(
            withChildFunction(ItemList, renderModelAndName)),
             mapStarshipsMethodToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};