import React, {Component} from 'react';
import Row from '../row/';
import {
    StarshipDetails,
    StarshipList,
  } from '../sw-components';

export default class StarshipsPage extends Component {
    state = {
        selectedItem : null
    };
//присваивает айтему ид прямо в стейт
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    //блок перенесен с app.js
    render() {
        const { selectedItem } = this.state;
        return (
            <Row left={<StarshipList onItemSelected={this.onItemSelected}/>} right={<StarshipDetails itemId={selectedItem}/>} />
        );
    }
};