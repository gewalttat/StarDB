export default class SwapiService {
    //указание источника данных для getResource
    _apiBase = 'https://swapi.co/api';
    //основная асинхронная функция, возвращающая промис возвращающий данные с swapi.co(?)
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        //бросает ошибку если нет респонса
        if (!res.ok) {
            throw new Error()
        };
        //отдает респонс в жсыне
        return await res.json();
    };
    //отдают респонс или ошибку по разделам swapi.co
    //в теле функции идут только разделы т.к. основной адрес получения указан в apiBase
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        //возвращает респонс массивом
        return res.results.map(this._transformPerson);
    };
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };
    async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
};

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
      }
    

      async getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
      }
    //вычленение id из состава swapi
    _extractId(item) {
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