import { NavLink, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
         <NavLink to='/'>
           Home
        </NavLink>
        <br />
        <NavLink to='/movies'>
           Movies
       </NavLink>
       <Outlet/>
    </>
    )
}

export default Layout;