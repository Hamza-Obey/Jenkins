import React from "react" ;
import {Link} from "react-router-dom" ;
import "./Navbar.css";
function Navbar (){
    return(

<nav className="Navbar">
          <ul>
            <li className="Clothes"> 
             <Link to="/Clothes Store "> Clothes Store</Link>
            </li>
            <li className="Home">
              <Link to="/Home"> Home </Link>
            </li>
            <li className="Men">
              <Link to="/Men">Men</Link>
            </li>
            <li className="Women">
              <Link to="/Women">Women</Link>
            </li>
          </ul>
        </nav>
    )
}       ;
export default Navbar ;