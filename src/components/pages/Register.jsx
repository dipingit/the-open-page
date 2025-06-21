import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        //get form data
        const form = new FormData(e.target)
        const name = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        console.log({name, photoURL, email, password});
        createNewUser(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
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
                        <input type="text" name="name" className="input" placeholder="Enter your name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name="photoURL" className="input" placeholder="Enter your photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Enter your email address" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Enter your Password" />
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='font-semibold text-center'>Already have an Account? <Link className='text-red-500' to='/auth/login'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Register;