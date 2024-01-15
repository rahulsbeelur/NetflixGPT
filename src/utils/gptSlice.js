import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieSearch: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { toggleGptSearchView, addGptMovieSearch } = gptSlice.actions;
export default gptSlice.reducer;
