import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { LOG_IN_IMAGE } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10 ">
                <img src={LOG_IN_IMAGE} alt="Background" />
                <div class="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
};

export default GptSearch;
