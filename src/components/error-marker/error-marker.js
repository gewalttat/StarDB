import React from 'react';
import './error-marker.css';
const ErrorMarker = () => {
return (
    <div className="error-marker">
    <span className='boom'> BOOM! 
    </span>
    <span>
    something has gone wrong...
    </span>
    <span>
    (but we already send droids to fix it)
    </span>
    </div>
);
};
export default ErrorMarker;