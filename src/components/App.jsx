// tranding-movie
// https://api.themoviedb.org/3/trending/movie/day?language=en-US

// api_key=b5a20566eb3bb1e19d16b3f507e342a4

// search
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

// потрібно там додати до пошукового рядка query=слово пошуку

// деталі фільму
// https://api.themoviedb.org/3/movie/movie_id?language=en-US'


// акторський склад
// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US

// Огляд фільму
// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1

// там де вказано movie_id треба айдішник підставляти

import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";

import MoviePage from "./Pages/MoviePage";
import MovieDetailPage from "./PageDetail/MovieDetail";
import CastMoviePage from "./Pages/CastMovie";
import ReviewsMoviePage from "./Pages/ReviewsMovie";
import Layout from "./Pages/Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<HomePage/>}/>
         <Route path="/movies" element={<MoviePage/>}/>
         <Route path="/movies/:movieId" element={<MovieDetailPage/>}>
           <Route path="cast" element={<CastMoviePage/>}/>
           <Route path="reviews" element={<ReviewsMoviePage/>}/>
         </Route>
         </Route> 
      </Routes>
    </div>
  );
};
