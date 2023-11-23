import { createContext, useReducer } from 'react';
import {
  MovieAction,
  MovieContentProps,
  MovieDataType,
  MovieState,
} from '../types';
import { moviesData } from '../assets/data';

// creating of MovieContextAPI

const MovieList: MovieDataType[] = moviesData;

const initialMovieState: MovieState = {
  movies: MovieList,
};

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  console.log('bookmarked');

  switch (action.type) {
    case 'TOGGLE_BOOKMARK':
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};
const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => null,
});

const MovieProvider = ({ children }: MovieContentProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
