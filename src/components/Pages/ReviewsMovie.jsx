import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewsMoviePage(){
    const [reviews, setReviews] = useState('')
    const {movieId} = useParams()

    console.log(movieId)

    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b5a20566eb3bb1e19d16b3f507e342a4language=en-US&page=1`)
       .then(res => res.json)
    })

    return(
        <h1>Reviews</h1>
    )
}

export default ReviewsMoviePage;