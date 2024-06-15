import { Outlet } from "react-router-dom";

function MovieDetailPage(){
    return(
        <>
        <h1>Information about movie</h1>
        <Outlet/>
        </>
    )
}

export default MovieDetailPage;