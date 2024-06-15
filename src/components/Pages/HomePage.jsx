import { useEffect, useState } from "react"

function HomePage(){
    const [trending, setTrending] = useState(null)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=b5a20566eb3bb1e19d16b3f507e342a4`)
        .then(res => res.json())
        .then(trending => setTrending(trending))
        .catch(error => console.log(error))
    })
    return(
        <>
        <h1>Trending today</h1>
        {trending && trending.map(() => {
           
        })}
        </>
    )
}

export default HomePage;