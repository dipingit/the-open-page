import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleSubmit = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password).then(result => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : '/');
        }).catch(err => {
            setError({...error, login: err.code});
        });
    }
    return (
        <div className='min-h-screen flex justify-center items-start pt-10 bg-gray-100'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Log in to Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset space-y-3">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Password" />
                        {
                            error.login && <label className='text-red-600'>{error.login}</label>
                        }
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-semibold text-center'>Don't have an Account? <Link className='text-red-500' to='/auth/register'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;