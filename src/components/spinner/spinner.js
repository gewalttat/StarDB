import React from 'react';
import './spinner.css';
//отдает верстку с классами, взятую с loader.io 
const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
    <div className="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div><style type="text/css"></style></div>
    );
};
export default Spinner;