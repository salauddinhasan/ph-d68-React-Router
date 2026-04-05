import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate()
    return (
        <div className='text-center'>
             <h1  className='text-3xl font-bold text-gray-600'>About</h1>
             <div className='mt-10'>
                <button onClick={() => navigate('/')} className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Go to Home</button>
             </div>
        </div>
    );
};

export default About;