import { logo } from '../utils/assets';

const Header = () => {
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-br from-black z-[999]">
            <img className="w-44 h-20" src={logo} alt="logo" />
        </div>
    );
};

export default Header;
