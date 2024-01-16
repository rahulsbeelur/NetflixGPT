import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className="w-full px-6 py-2 mobile:px-2 mobile:w-full">
            <div>
                <h1 className="font-bold text-xl text-white mobile:text-lg tablet:text-[20px]">
                    {title}
                </h1>
            </div>
            <div className="flex gap-4 overflow-x-scroll overflow-y-hidden py-6 scrollbar-hide mobile:py-2 tablet:py-4">
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
