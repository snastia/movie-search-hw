import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function MovieDetailPage(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState('')

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b5a20566eb3bb1e19d16b3f507e342a4`)
      .then(res => res.json())
      .then(movie => setMovie(movie))
      .catch(error => console.log(error))
    }, [])

    return(
        <>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} width={550}/>
        <h2>{movie.original_title}</h2>
         <p>User score: {movie.vote_average}/10</p>
        <h3>Overview</h3>
         <p>{movie.overview}</p>
        <h4>Genres</h4>
         <p></p>
        <p>Additional information</p> 
        <ul>
          <li>
            <Link as={Link} to={`cast`}>Cast</Link>
            </li>
          <li>
            <Link as={Link} to={`reviews`}>Reviews</Link>
            </li>
        </ul>
        <Outlet/>
        </>
    )
}

export default MovieDetailPage;