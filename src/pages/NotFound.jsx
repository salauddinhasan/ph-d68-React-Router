import React  from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center py-20'>
            <h1 className='text-6xl font-bold text-red-500'>404</h1>
            <p className='text-xl mt-4 to-gray-600 '>Ore baba apni to vul rastai chole aschen </p>
            <link to='/' className='inline-block mt-6 px-6 py-2 bg-blue-600 text-white'> Home a fire jan </link>
            
        </div>
    );
};

export default NotFound;