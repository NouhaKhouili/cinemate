import{Routes, Route} from "react-router-dom";



import React from 'react'
import { MovieDetail } from "../pages/MovieDetail";
import { MovieList } from "../pages/MovieList";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <main>
            <Routes>
                <Route path="/" element={<MovieList apiPath='movie/now_playing' title='Home'></MovieList>} />
                <Route path="movies/popular" element={<MovieList apiPath='movie/popular' title='popular'></MovieList>} />
                <Route path="movies/top" element={<MovieList apiPath='movie/top_rated' title='Top Rated'></MovieList>} />
                <Route path="movies/upcoming" element={<MovieList apiPath='movie/upcoming' title='Upcoming'></MovieList>} />
                <Route path="movie/:id" element={<MovieDetail apiPath='movie/{movie_id}'></MovieDetail>} />
                
                <Route path="search" element={<Search apiPath="search/movie" title='search'></Search >} />

                <Route path="*" element={<PageNotFound title='Page Not Found'></PageNotFound>} />
            </Routes>
      </main>
   </div>
  )
}
