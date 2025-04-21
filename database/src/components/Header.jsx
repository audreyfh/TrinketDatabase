import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import "./css/Header.css";
function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <header id="main-header">
                <h1><a href="#" class="home">Audrey's Trinket Database</a></h1>
                <nav id="main-nav">
                    <button onClick={toggleMenu}>
                    <div id="toggle-nav">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </button>
                    
                    <ul class={menuOpen?"columns":"columns hidden"}>
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