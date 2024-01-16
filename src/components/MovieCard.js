import { IMAGE_CDN_URL } from './../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-[164px] mobile:w-[100px] tablet:w-[150px]">
            <img
                alt="Movie Card"
                src={IMAGE_CDN_URL + posterPath}
                className="rounded-lg h-[250px] mobile:h-[150px] tablet:h-[200px]"
            />
        </div>
    );
};

export default MovieCard;
