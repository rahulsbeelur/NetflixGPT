import { useState } from 'react';
import { loginImage } from '../utils/assets';
import Header from './Header';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={loginImage} alt="Background" />
            </div>
            <form className="p-12 bg-black absolute w-3/12 mt-40 m-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4 w-full">
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </h1>
                {!isSignIn && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-2 m-2 w-full bg-gray-700"
                    />
                )}
                <input type="text" placeholder="Email" className="p-2 m-2 w-full bg-gray-700" />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 m-2 w-full bg-gray-700"
                />
                <button className="py-4 m-2 mt-6 rounded-lg bg-red-700 w-full">
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </button>
                <p
                    className="mt-10 text-sm text-white p-2 cursor-pointer"
                    onClick={toggleSignInForm}>
                    {isSignIn ? 'New to Netlfix? Sign Up Now' : 'Already Registered? Sign In Now'}
                </p>
            </form>
        </div>
    );
};

export default Login;
