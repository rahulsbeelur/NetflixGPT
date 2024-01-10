import { useNavigate } from 'react-router';
import { logo } from '../utils/assets';
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
          });
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-[999] flex justify-between">
            <img className="w-44 h-20" src={logo} alt="logo" />
            {user && <div className='flex gap-2'>
                <div className='self-center text-[20px] text-black font-bold'>Hi, {user.displayName}</div>
                <img className='w-10 h-10 my-auto rounded-xl' alt="icon" src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVB2PLirdQh_1yd9FQBW3HBGcUmWVlTDrUt5l1W_lqDJ33Sl-F6vY8O2X_URorArVYCkG0SnXjA6LXqHBLFVMg_DMtx19TA.png?r=cf8" />
                <button onClick={handleSignOut} className='text-[16px] font-bold self-center text-center bg-red-500 m-2 p-2 rounded'>Sign Out</button>
            </div>}
        </div>
    );
};

export default Header;
