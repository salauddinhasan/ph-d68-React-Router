 
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { username } = useParams()
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>WelCome, {  username }</h1> 
            <p className='mt-2 text-gray-500'> This is my Profile Page</p>           
        </div>
    );
};

export default UserProfile;