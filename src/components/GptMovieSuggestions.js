import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector((store) => store.gptSearch);
    if (!movieResults) return;
    return (
        <div className="mt-[10%] p-4 bg-black bg-opacity-70">
            <div className="text-white">
                {movieNames.map((movie, index) => (
                    <div key={movie}>
                        <h1 className="text-2xl px-6 font-bold mobile:px-2 mobile:text-lg">
                            Movies Similar to
                        </h1>
                        <MovieList title={movie} movies={movieResults[index]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;
