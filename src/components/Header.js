/* eslint-disable react-hooks/exhaustive-deps */
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
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-[999] flex justify-between mobile:flex-col mobile:items-center mobile:p-0 bg-black">
            <div className="w-full flex justify-between mobile:hidden ">
                <img className="w-44 h-20 tablet:w-[120px] tablet:h-12" src={LOGO} alt="LOGO" />
                {user && (
                    <div className="flex gap-2 mobile:justify-between">
                        <div className="flex mobile:flex-col-reverse">
                            <button
                                className="bg-purple-800 hover:bg-purple-950 text-white font-bold p-2 m-2 rounded self-center tablet:text-[14px]"
                                onClick={handleGptSearchClick}>
                                {!showGptSearch ? 'GPT Search' : 'Home Page'}
                            </button>
                            <div className="self-center text-[20px] text-white font-bold tablet:text-[14px]">
                                Hi, {user.displayName}
                            </div>
                        </div>

                        <div className="flex mobile:flex-col mobile:items-center">
                            <img
                                className="w-10 h-10 my-auto rounded-xl mobile:w-8 mobile:h-8"
                                alt="icon"
                                src={USER_LOGO}
                            />
                            <button
                                onClick={handleSignOut}
                                className="text-[16px] font-bold self-center text-center bg-red-500 m-2 p-2 rounded tablet:text-[14px]">
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="desktop:hidden tablet:hidden py-2 w-full">
                {!user && (
                    <img
                        className="w-44 h-20 mobile:w-[120px] mobile:h-15 mx-auto"
                        src={LOGO}
                        alt="LOGO"
                    />
                )}
                {user && (
                    <div className="flex gap-2 mobile:justify-between mobile:w-full">
                        <div className="flex mobile:flex-col-reverse">
                            <button
                                className="bg-purple-800 hover:bg-purple-950 text-white font-bold p-2 m-2 rounded self-center text-[14px]"
                                onClick={handleGptSearchClick}>
                                {!showGptSearch ? 'GPT Search' : 'Home Page'}
                            </button>
                            <div className="self-center text-[20px] text-white font-bold mobile:text-[16px]">
                                Hi, {user.displayName}
                            </div>
                        </div>
                        <img
                            className="w-44 h-20 mobile:w-[120px] mobile:h-15"
                            src={LOGO}
                            alt="LOGO"
                        />
                        <div className="flex mobile:flex-col mobile:items-center">
                            <img
                                className="w-10 h-10 my-auto rounded-xl mobile:w-8 mobile:h-8"
                                alt="icon"
                                src={USER_LOGO}
                            />
                            <button
                                onClick={handleSignOut}
                                className="text-[16px] font-bold self-center text-center bg-red-500 m-2 p-2 rounded text-[14px]">
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
