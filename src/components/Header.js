import { useNavigate } from 'react-router';
import { LOGO } from '../utils/constants';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gptSearch?.showGptSearch);
    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {});
    };
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-[999] flex justify-between">
            <img className="w-44 h-20" src={LOGO} alt="LOGO" />
            {user && (
                <div className="flex gap-2">
                    <div className="flex">
                        <button
                            className="bg-purple-800 hover:bg-purple-950 text-white font-bold p-2 m-2 rounded self-center"
                            onClick={handleGptSearchClick}>
                            {!showGptSearch ? 'GPT Search' : 'Home Page'}
                        </button>
                    </div>
                    <div className="self-center text-[20px] text-white font-bold">
                        Hi, {user.displayName}
                    </div>

                    <img className="w-10 h-10 my-auto rounded-xl" alt="icon" src={USER_LOGO} />
                    <button
                        onClick={handleSignOut}
                        className="text-[16px] font-bold self-center text-center bg-red-500 m-2 p-2 rounded">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
