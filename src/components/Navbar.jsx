import { Link } from 'react-router-dom';
import UserIcon from  '../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user?.email || 'Guest'}</div>
            <div className='nav space-x-5'>
                <Link>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div className=''>
                    <img src={UserIcon} alt="" />
                </div>
                <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;