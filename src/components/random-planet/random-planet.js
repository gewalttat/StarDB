import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Preloader from '../preloader/preloader';
import ErrorMarker from '../error-marker/error-marker';
export default class RandomPlanet extends Component {

  swapiService = new SwapiService();
  //установка состояния компонента: планета является объектом получаемым из сваписервис
  //loading и error являют статусы состояния
  state = {
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    this.updatePlanet();
    //установка интервала обновления планеты
this.interval = setInterval(this.updatePlanet, 7000);  
  }

  componentWillUnmount() {
    //сброс интервала обновления(зачем?)
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet, 
      loading : false
    });
  };
  //просто меняет в стейте состояние error 
  onError = (err) => {
this.setState ({
  error : true,
  loading : false
});
  };
//функция рандомной планеты
  updatePlanet = () => {
    //ловит рандом ид в диапазоне
    const id = Math.floor(Math.random()*25)+2;
    //передает его в сваписервис
    this.swapiService
      .getPlanet(id)
      //промисом грузит контент
      .then(this.onPlanetLoaded)
      //отлавливает onError в ходе выполнения (если ид вне диапазона)
      .catch(this.onError);
  };

  render() {
    const {planet, loading, error} = this.state;
    //отображение контента
    const hasData = !(loading || error);
    //если есть ошибка - выкидывает жсх с маркером, если нет игнорирует
    const errorMessage = error ? <ErrorMarker/> : null;
    //если идет загрузка показывает лоадер
const preloader = loading ? <Preloader/> : null;
//если hasData активен - показывает контент
const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
      {errorMessage}
      {preloader}
      {content}
      </div>
    );
  }
}
//показ кишок планеты
const PlanetView = ({ planet }) => {
//тащит деструктурированием кишки из планеты
  const { id, name, population,
    rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};