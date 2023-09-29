import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const timeWindow = 'day';

const api_key = 'c29fa027c9733aa97084407cb8db7ec7';

export const BaseAPI = createApi({
  reducerPath: 'baseapi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: builder => ({
    getPopularMovies: builder.query({
      query: ({pageId}) =>
        `/movie/popular?api_key=${api_key}&language=en-US&page=${pageId}`,
    }),
    gettvPopularMovies: builder.query({
      query: ({pageId}) =>
        `/tv/popular?api_key=${api_key}&language=en-US&page=${pageId}`,
    }),
    getTodayTrending: builder.query({
      query: ({pageId}) =>
        `/trending/movie/${timeWindow}?api_key=${api_key}&language=en-US`,
    }),
    searchMovieDefault: builder.query({
      query: ({pageId, search_query}: any) =>
        `/search/movie?api_key=${api_key}&query=${search_query}&language=en-US&page=${pageId}`,
    }),
    searchMovie: builder.query({
      query: ({pageId, Search_input}: any) =>
        `/search/movie?api_key=${api_key}&query=${Search_input}&language=en-US&page=${pageId}`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGettvPopularMoviesQuery,
  useGetTodayTrendingQuery,
  useSearchMovieDefaultQuery,
  useSearchMovieQuery,
} = BaseAPI;
