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
      </Routes>
    </div>
  );
};
