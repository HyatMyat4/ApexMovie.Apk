import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import ActionSlice from './ActionSlice';

interface initialState {
  PoularMovie: Movie_data[];
}

const initialState: initialState = {
  PoularMovie: [],
};

export const MovieReducer = createSlice({
  name: 'MovieReducer',
  initialState,
  reducers: {
    addPopularMovie: (state: initialState, actions: PayloadAction<any>) => {
      state.PoularMovie = actions.payload;
    },
  },
});

export const {addPopularMovie} = MovieReducer.actions;

export const PopularMovieData = (state: initialState | any) =>
  state.MovieReducer.PoularMovie;

export default MovieReducer.reducer;
