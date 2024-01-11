import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (!movies.nowPlayingMovies || !movies.topRatedMovies || !movies.upcomingMovies) return;
    return (
        <div className="bg-black">
            <div className="-mt-56 z-[999] relative pl-7">
                <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                <MovieList title="Popular" movies={movies.topRatedMovies} />
                <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
