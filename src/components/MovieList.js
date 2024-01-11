import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className="w-screen px-6 py-2">
            <div>
                <h1 className="font-bold text-xl text-white">{title}</h1>
            </div>
            <div className="flex gap-4 overflow-x-scroll overflow-y-hidden py-6 scrollbar-hide">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <MovieCard posterPath={movie?.poster_path} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
