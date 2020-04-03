import React, { Component } from 'react';
import Preloader from "../preloader/preloader";

//миллениалы придумали полиморфизм ¯\_(ツ)_/¯
//прикол с всратыми индекс.жс всё ещё непонятен но лень искать как нормально импортить
const withData = (View, getData) => {
    return class extends Component  {
      state = {
        data : null
      };
  
      componentDidMount() {
    //запрос на данные 
        getData()
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

  export default withData;