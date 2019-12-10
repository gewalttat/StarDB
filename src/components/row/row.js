import React from 'react';

//компонент-контейнер
const Row = ({left, right}) => {
    return (
      //задает стили для заменяемых элементов
      //т.к. это бутстрап, left/right не означает именно фиксацию лево/право, т.к. блоки будут двигаться 
      //вместе с изменением размера страницы
      <div className="row mb2">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
  {right}        
        </div>
      </div>
    );
  }
  
  export default Row;