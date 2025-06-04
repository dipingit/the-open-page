import { Link } from 'react-router-dom';
import UserIcon from  '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav space-x-5'>
                <Link>Home</Link>
                <Link>Career</Link>
                <Link>About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div className=''>
                    <img src={UserIcon} alt="" />
                </div>
                <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;