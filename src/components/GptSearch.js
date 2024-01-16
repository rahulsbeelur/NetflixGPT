import GptSearchBar from './GptSearchBar';
import { LOG_IN_IMAGE } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img
                    src={LOG_IN_IMAGE}
                    alt="Background"
                    className="w-screen h-screen object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <GptSearchBar />
        </div>
    );
};

export default GptSearch;
