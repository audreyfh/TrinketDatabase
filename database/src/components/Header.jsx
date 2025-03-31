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
                        <li><a href={process.env.PUBLIC_URL + "/"}>Home</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/About"}>About</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/Contact"}>Contact Me</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/Collections"}>Collections</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/Ranking"}>Ranking</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/Future"}>Future Trinkets</a></li>
                    </ul>
                </nav>
            </header>
    );
    
};
export default Header;