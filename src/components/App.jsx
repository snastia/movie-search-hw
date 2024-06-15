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

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/movie" element={<MoviePage/>}/>
        <Route path="/movie/:movieId" element={<MovieDetailPage/>}/>
        <Route></Route>
      </Routes>
    </div>
  );
};
