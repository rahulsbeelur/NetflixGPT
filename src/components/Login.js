import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginImage } from '../utils/assets';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };

    const handleFormSubmission = () => {
        const message = checkValidData(
            email.current.value,
            password.current.value,
            name.current !== null ? name.current.value : null
        );
        setErrorMessage(message);

        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                      }).then(() => {
                        const { uid, email, displayName } = user;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName  }));
                        navigate('/browse');
                      }).catch((error) => {
                        setErrorMessage(error.message);
                      });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={loginImage} alt="Background" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="p-12 bg-black absolute w-3/12 mt-40 m-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4 w-full">
                    {isSignIn ? 'Sign In' : 'Sign Up'}
                </h1>
                {!isSignIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-2 m-2 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email"
                    className="p-2 m-2 w-full bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 m-2 w-full bg-gray-700"
                />
                <p className="text-red-500 text-lg p-2">{errorMessage}</p>
                <button
                    className="py-4 m-2 mt-6 rounded-lg bg-red-700 w-full"
                    onClick={handleFormSubmission}>
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
