import GptSearchBar from './GptSearchBar';
import { LOG_IN_IMAGE } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10 ">
                <img src={LOG_IN_IMAGE} alt="Background" />
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <GptSearchBar />
        </div>
    );
};

export default GptSearch;
