import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY
const page = 1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: ( builder ) => ({
      //  Get Genres
      getGenres:builder.query({
        query: () => {
          return `genre/movie/list?api_key=${tmdbApiKey}`
        }
      }),
      //  Get Movies by [Type]
      getMovies: builder.query({
        query: ({ genreIdOrCategoryName, page, searchQuery }) => {
          // Get movies by Category
          if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string')
          {
            return `movie/${genreIdOrCategoryName.split(' ').join('_').toLowerCase()}?page=${page}&api_key=${tmdbApiKey}`;
          }
          // Get movies by Genre
          console.log(genreIdOrCategoryName)
          if(genreIdOrCategoryName)
          {
            genreIdOrCategoryName = Number(genreIdOrCategoryName);
            return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
          }
          // Get movies by Search
          if(searchQuery){
            return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
          }
          // Get movies by Popular(at the start of page)
          return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
        }
      })
    })
})

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
} = tmdbApi ; 