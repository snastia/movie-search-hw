import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CastMoviePage(){
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/api_key=b5a20566eb3bb1e19d16b3f507e342a4/credits?language=en-US`)
        .then(res => setCast(res.cast));
    }, [movieId]);

    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map(actor => (
                    <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
                ))}
            </ul>
        </div>
    );
}

export default CastMoviePage;