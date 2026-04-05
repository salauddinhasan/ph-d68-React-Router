 
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20 bg-red-50 rounded-lg border-2 border-dashed border-red-200'>
            <h1 className='text-6xl font-bold text-red-500'>404</h1>
            <p className='text-xl mt-4 to-gray-600 '>Ore baba apni to vul rastai chole aschen </p>
            <Link to='/' className='inline-block mt-6 px-6 py-2 bg-blue-600 text-white'> Home a fire jan </Link>
            
        </div>
    );
};

export default NotFound;