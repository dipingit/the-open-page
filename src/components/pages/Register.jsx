import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //get form data
        const form = new FormData(e.target)
        const name = form.get('name');
        if(name.length < 5){
            setError({...error, name: 'must be more than 5 characters long'});
            return;
        }
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        createNewUser(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
            navigate(location?.state ? location.state : '/');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });

    }
    return (
        <div className="min-h-screen flex justify-center items-start pt-10 bg-gray-100">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="Enter your name" />
                        {
                            error.name && <label className="text-red-600">{error.name}</label>
                        }
                        <label className="label">Photo URL</label>
                        <input type="text" name="photoURL" className="input w-full" placeholder="Enter your photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Enter your email address" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Enter your Password" />
                        <button className="btn btn-neutral mt-4 w-full">Register</button>
                    </fieldset>
                    <p className='font-semibold text-center'>Already have an Account? <Link className='text-red-500' to='/auth/login'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;