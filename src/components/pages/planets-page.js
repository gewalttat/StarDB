import React, {Component} from 'react';
import Row from '../row/';
import {
    PlanetDetails,
    PlanetList,
  } from '../sw-components';

export default class PlanetPage extends Component {
    state = {
        selectedItem : null
    };
//присваивает айтему ид прямо в стейт
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    //блок перенесен с app.js, в переменные вставлен стейт и ид из него же 
    render() {
        const { selectedItem } = this.state;
        return (
            <Row left={<PlanetList onItemSelected={this.onItemSelected}/>} right={<PlanetDetails itemId={selectedItem}/>} />
        );
    }
};