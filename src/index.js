class SwapiServices {
    //указание источника данных для getResource
    apiBase = 'https://swapi.co/api';
    //основная асинхронная функция, возвращающая промис возвращающий данные с swapi.co(?)
    async getResource(url){
        //res = ответ сервера
        const res = await fetch(`${this.apiBase}${url}`);
        //бросает ошибку если нет респонса
        if (!res.ok) {
            throw new Error()
        }
        //отдает респонс в жсыне
        return await res.json();
    };
    //отдают респонс или ошибку по разделам swapi.co
    //в теле функции идут только разделы т.к. основной адрес получения указан в apiBase
    getAllPeople() {
        return this.getResource(`/people/`);
    };
    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    };
}