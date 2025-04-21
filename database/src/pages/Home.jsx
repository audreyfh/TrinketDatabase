import './css/Home.css'
import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from '../components/TrinketShowcase';
function Home(){
    return (
        <div id="content">
            <main id="home-main">
                <section id = "top-section">
                    <h2>Welcome to Audrey's Trinket Database</h2>
                    <div id="main-image"><img src= {process.env.PUBLIC_URL + "/" + "images/homeimg.jpg"}/></div>
                </section>
                <div>
                    <TrinketShowcase category="home" viewMode="simple"/>
                </div>
            </main>
        </div>
    );
};

export default Home;