import React from 'react';
import './header.css';
//заголовок, ничего интересного
const Header = () => {
    return (
        //присваивание заголовкам классов, прописывание заголовков 
    <div className='header d-flex'>
    <h1><a href='#'>Star Wars Database</a></h1>
    <ul className='asd'>
    <li><a href='#'>People</a></li>
    <li><a href='#'>Planets</a></li>
    <li><a href='#'>Starships</a></li>
    </ul>
    </div>
    );
    };
    export default Header;