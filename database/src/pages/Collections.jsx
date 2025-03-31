import './css/Collections.css'
import {Outlet, Link} from "react-router-dom";
function Collections(){
    return (
        <div id="content">
            <main>
                    <h2>Collections</h2>
                    <div class="columns">
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Collectible Trinkets</h3>
                            <img class="collectionimg" src="images/smiski.jpg"/>
                        </Link></section>
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Vintage Trinkets</h3>
                            <img class="collectionimg" src="images/monchichi.jpg"/>
                        </Link></section>
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Foreign Trinkets</h3>
                            <img class="collectionimg" src="images/mymelo.jpg"/>
                        </Link></section>
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>"Junk" Trinkets</h3>
                        </Link><img class="collectionimg" src="images/petrock.jpg"/>
                        </section>
                    </div>
                    <div class="columns">
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Animal Trinkets</h3>
                            <img class="collectionimg" src="images/catshark.jpg"/>
                        </Link></section>
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Cute Trinkets</h3>
                            <img class="collectionimg" src="images/macaron.jpg"/>
                        </Link></section>
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Doll Trinkets</h3>
                            <img class="collectionimg" src="images/drac.jpg"/>
                        </Link></section>
                        <section class="col1of2"><Link to="./ExampleCollection">
                            <h3>Misc. Trinkets</h3>
                            <img class="collectionimg" src="images/bear.jpg"/>
                        </Link></section>
                    </div>
                </main>
        </div>
    );
};

export default Collections;
