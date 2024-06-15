import { NavLink, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
         <NavLink to='/'>
           Home
        </NavLink>
        <NavLink to='/movies'>
           Movies
       </NavLink>
       <Outlet/>
    </>
    )
}

export default Layout;