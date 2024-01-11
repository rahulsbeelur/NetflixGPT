const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video absolute pt-[20%] px-12 text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="w-1/2 pt-6 pl-1">{overview}</p>
            <div className="pt-10 flex gap-4 pl-1">
                <button className="bg-white hover:bg-opacity-60 px-10 py-4 rounded text-black font-bold text-xl flex justify-center gap-2 text-center">
                    ► Play
                </button>
                <button className="bg-gray-400 px-10 py-4 rounded text-white font-bold text-xl flex justify-center gap-2 text-center">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
