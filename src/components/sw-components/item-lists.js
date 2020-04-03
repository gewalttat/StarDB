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

//заброс в константы данных по списку получающему данные с разных гетов
const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
};