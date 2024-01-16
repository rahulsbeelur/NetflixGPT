import { useRef } from 'react';
import useGptMovieResults from '../hooks/useGptMovieResults';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const { handleGptSearch } = useGptMovieResults({ searchText: '' });
    const handleSearch = () => {
        handleGptSearch(searchText?.current.value);
    };

    return (
        <div className="pt-[10%] w-full h-screen mobile:mx-auto mobile:pt-[30%]">
            <form
                className="w-1/2 grid grid-cols-12 mx-auto mobile:w-full"
                onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className="m-4 p-4 col-span-9 mobile:m-2 mobile:text-sm"
                    ref={searchText}
                    placeholder="What would you like to watch today?"
                />
                <button
                    onClick={handleSearch}
                    className="m-4 col-span-3 bg-red-700 hover:bg-red-900 text-white rounded border border-black mobile:m-2 mobile:text-sm">
                    Suggest
                </button>
            </form>
            <GptMovieSuggestions />
        </div>
    );
};

export default GptSearchBar;
