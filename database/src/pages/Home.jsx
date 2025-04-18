import './css/Home.css'
import {Outlet, Link} from "react-router-dom";
function Home(){
    return (
        <div id="content">
            <main id="home-main">
                <section id = "top-section">
                    <h2>Welcome to Audrey's Trinket Database</h2>
                    <div id="main-image"><img src= {process.env.PUBLIC_URL + "/" + "images/homeimg.jpg"}/></div>
                </section>
                <div>
                    <section class="row1of3"><Link to="ExampleTrinket">
                        <img class="sub-image" src={process.env.PUBLIC_URL + "/" + "images/candle2x1.jpg"} />
                        <h3>Newest Trinket</h3>
                    </Link></section>
                    <section class="row1of3"><Link to="ExampleTrinket">
                        <img class="sub-image" src={process.env.PUBLIC_URL + "/" + "images/petrock2x1.jpg"} />
                        <h3>Highest Rating</h3>
                    </Link></section>
                    <section class="row1of3"><Link to="ExampleTrinket">
                        <img class="sub-image" src={process.env.PUBLIC_URL + "/" + "images/hangyodon2x1.jpg"} />
                        <h3>Random Trinket</h3>
                    </Link></section>
                </div>
            </main>
        </div>
    );
};

export default Home;