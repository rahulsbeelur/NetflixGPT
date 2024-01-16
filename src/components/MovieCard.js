import { IMAGE_CDN_URL } from './../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-[164px] mobile:w-[100px]">
            <img
                alt="Movie Card"
                src={IMAGE_CDN_URL + posterPath}
                className="rounded-lg h-[250px] mobile:h-[150px] "
            />
        </div>
    );
};

export default MovieCard;
