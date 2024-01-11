const GptSearchBar = () => {
    return (
        <div className="pt-[10%] w-screen h-screen ">
            <form className="w-1/2 grid grid-cols-12 mx-auto">
                <input
                    type="text"
                    className="m-4 p-4 col-span-9"
                    placeholder="What would you like to watch today?"
                />
                <button className="m-4 col-span-3 bg-red-700 hover:bg-red-900 text-white rounded border border-black">
                    Suggest
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
