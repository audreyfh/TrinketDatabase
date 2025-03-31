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
                        <li><a href="/">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Contact">Contact Me</a></li>
                        <li><a href="/Collections">Collections</a></li>
                        <li><a href="/Ranking">Ranking</a></li>
                        <li><a href="/Future-Trinkets">Future Trinkets</a></li>
                    </ul>
                </nav>
            </header>
    );
    
};
export default Header;