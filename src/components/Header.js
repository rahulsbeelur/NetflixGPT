import { useNavigate } from 'react-router';
import { logo } from '../utils/constants';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { userLogo } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {});
    };
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-[999] flex justify-between">
            <img className="w-44 h-20" src={logo} alt="logo" />
            {user && (
                <div className="flex gap-2">
                    <div className="self-center text-[20px] text-black font-bold">
                        Hi, {user.displayName}
                    </div>
                    <img className="w-10 h-10 my-auto rounded-xl" alt="icon" src={userLogo} />
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
