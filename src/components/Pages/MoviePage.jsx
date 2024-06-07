import { Link } from "react-router-dom";

function MoviePage(){
    return(
        <>
          <h1>Movie page</h1>
          <ul>
            {['movie-1', 'movie-2'].map(movie => {
            return (
               <li>
                <Link to={`${movie}`}>{movie}</Link>
                </li>
            )
          })}
        </ul>
        </>
    )
}

export default MoviePage;