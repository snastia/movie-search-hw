import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewsMoviePage(){
    const [reviews, setReviews] = useState('')
    const {movieId} = useParams()

    console.log(movieId)

    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b5a20566eb3bb1e19d16b3f507e342a4language=en-US&page=1`)
       .then(res => setReviews(res.results));
    })

    return(
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReviewsMoviePage;