import React, { Component } from 'react';
import Preloader from "../preloader/preloader";

//миллениалы придумали полиморфизм ¯\_(ツ)_/¯
const withData = (View) => {
    return class extends Component  {
      state = {
        data : null
      };
  
      componentDidMount() {
    //запрос на данные 
        this.props.getData()
          .then((data) => {
            //обновление стейта айтемлист полученными данными
            this.setState({
              data
            });
          });
      }
      render() {
        const { data } = this.state;
  //отображает лодер если нет данных
      if (!data) {
        return <Preloader />;
      }
        //ловит всё что передалось из app в итемлист
        return <View {...this.props} data={data}/>
      }
    }
  };
 export { withData };