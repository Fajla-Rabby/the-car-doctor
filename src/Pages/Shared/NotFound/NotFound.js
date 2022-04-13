import React from 'react';
import sea from '../../../images/HTML-404-Page.gif'
const NotFound = () => {
    return (
        <div>
            {/* <h2 className='text-primary text-center'>Mechanic is sleeping</h2> */}
            <img className='w-100' src={sea} alt="" />
        </div>
    );
};

export default NotFound;