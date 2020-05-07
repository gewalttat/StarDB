export default class SwapiService {
    //указание источника данных для getResource
    _apiBase = 'https://swapi.dev/api';
    imageBase = 'https://starwars-visualguide.com/assets/img/';
    //основная асинхронная функция, возвращающая промис возвращающий данные с swapi.co(?)
getResource = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        //бросает ошибку если нет респонса
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        };
        //отдает респонс в жсыне
        return await res.json();
    };
    //отдают респонс или ошибку по разделам swapi.co
    //в теле функции идут только разделы т.к. основной адрес получения указан в apiBase
    getAllPeople = async() => {
        const res = await this.getResource(`/people/`);
        //возвращает респонс массивом
        return res.results
        .map(this._transformPerson)
        .slice(0,5);
    };
    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    };
    getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results
        .map(this._transformPlanet)
        .slice(0, 5);
    };
    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results
        .map(this._transformStarship)
        .slice(0, 5);
    };
getStarship = async(id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
      };
      
      getPersonImage = ({id}) => {
        return `${this.imageBase}/characters/${id}.jpg`
      };
      getStarshipImage = ({id}) => {
        return `${this.imageBase}/starships/${id}.jpg`
      };  
      getPlanetImage = ({id}) => {
        return `${this.imageBase}/planets/${id}.jpg`
      };
    //вычленение id из состава swapi
    _extractId = (item) => {
      //регулярное выражение получающее id с адресной строки компонента
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
    //получает компонент(планету) и выводит её составляющие
    //далее то же самое
    _transformPlanet = (planet) => {
        return  { 
            id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotationPeriod: planet.rotation_period
    }
};
_transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}