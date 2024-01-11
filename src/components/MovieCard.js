import { IMAGE_CDN_URL } from './../utils/constants';

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-[164px]">
            <img
                alt="Movie Card"
                src={IMAGE_CDN_URL + posterPath}
                className="rounded-lg h-[250px] "
            />
        </div>
    );
};

export default MovieCard;
