import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const handleSubmit = (e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
        userLogin(email, password).then(result => {
            const user = result.user;
            setUser(user);
        }).catch(error => {
            alert(error.code);
        });
    }
    return (
        <div className='min-h-screen flex justify-center items-start pt-10 bg-gray-100'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Log in to Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-semibold text-center'>Don't have an Account? <Link className='text-red-500' to='/auth/register'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;