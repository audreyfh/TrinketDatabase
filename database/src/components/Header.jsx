import {Outlet, Link} from "react-router-dom";
import "./css/Header.css";
function Header(){
    return(
        <header id="main-header">
                <h1><a href="#" class="home">Audrey's Trinket Database</a></h1>
                <nav id="main-nav">
                    <div id="toggle-nav">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul id="nav-items" class="columns hidden">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact Me</Link></li>
                        <li><Link to="/Collections">Collections</Link></li>
                        <li><Link to="/Ranking">Ranking</Link></li>
                        <li><Link to="/Future">Future Trinkets</Link></li>
                    </ul>
                </nav>
            </header>
    );
    
};
export default Header;