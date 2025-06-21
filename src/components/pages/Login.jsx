import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-start pt-10 bg-gray-100'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Log in to Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='font-semibold text-center'>Don't have an Account? <Link className='text-red-500' to='/auth/register'>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;