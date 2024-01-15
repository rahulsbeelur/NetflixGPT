import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieSearch } from '../utils/gptSlice';

const useGptMovieResults = () => {
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movieName) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' +
                movieName +
                '&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        return json?.results;
    };
    const handleGptSearch = async (searchText) => {
        const gptQuery =
            'Act like a movie recommendation system and suggest some movie names for the query - ' +
            searchText +
            ". Only give movies with comma separated array like example given ahead like this - ['3 Idiots', 'Kantara', 'KGF2']";
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo'
        });
        const gptMovies = JSON.parse(
            chatCompletion?.choices[0]?.message?.content.replace(/'/g, '"')
        );
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmbdResults = await Promise.all(promiseArray);
        dispatch(addGptMovieSearch({ movieNames: gptMovies, movieResults: tmbdResults }));
    };
    return { handleGptSearch };
};

export default useGptMovieResults;
