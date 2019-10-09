
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
        return res.results;
    };
    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    };
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    };
    getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
    };

    async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
    };

    getStarship(id) {
    return this.getResource(`/starships/${id}/`);
    };
};