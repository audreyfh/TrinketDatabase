import {Outlet, Link} from "react-router-dom";
import './css/Example-Collection.css'

function ExCollections() {
    return(
        <div id="content">
            <main>
                <h1>Example Collection</h1>
                <h4>Click on any trinket to learn more about it!</h4>
                <div class="columns">
                    <div class="collection"><Link to="./Example-Trinket"><img class="squareimg" src="images/petrock.jpg" /></Link></div>
                    <div class="collection"><Link to="./Example-Trinket">
                        <h3>Pet Rock</h3>
                        <p><strong>Year:</strong> 2025 <br />
                            <strong>Est. Value:</strong> Priceless <br />
                            <strong>Country of Origin:</strong> United States <br />
                            <strong>Description:</strong> This is one of the ugliest trinkets I own. However, it was
                            given to me by my boyfriend, who spent around 20 minutes making it and told me it was "me as a rock".
                            If you squint hard enough, it kind of does look like me a bit (not really). 5 stars for sentimental
                            value.<br />
                            <strong>Rating:</strong> ★★★★★ 
                        </p>
                    </Link></div>
                </div>
                    <div class="columns">
                        <div class="collection"><Link to="./Example-Trinket"><img class = "squareimg" src="images/macaron.jpg" /></Link></div>
                        <div class="collection"><Link to="./Example-Trinket">
                            <h3>Mia Macaron</h3>
                            <p><strong>Year:</strong> 2024 <br />
                                <strong>Est. Value:</strong> $0.00 <br />
                                <strong>Country of Origin:</strong> Indonesia <br />
                                <strong>Description:</strong> Despite her young age, Mia Macaron already has an incredibly worldly outlook.
                                Starting in a factory in Indonesia, Mia was shipped to France (possibly stopping in London, her company's homeland)! 
                                Here, she patiently sat in Paris's Jellycat Patisserie, until she was eventually picked up and bought by an American
                                tourist, who just happened to be my mother.<br />
                                <strong>Rating:</strong> ★★★★☆ 
                            </p>
                        </Link></div>
                    </div>
                    <div class="columns">
                        <div class="collection"><Link to="./Example-Trinket"><img class="squareimg" src="images/candle.jpg" /></Link></div>
                        <div class="collection"><Link to="./Example-Trinket">
                            <h3>Intriguing Candle</h3>
                            <p><strong>Year:</strong> Unknown <br />
                                <strong>Est. Value:</strong> $5.50 <br />
                                <strong>Country of Origin:</strong> Unknown <br />
                                <strong>Description:</strong> After hours of slaving away at my computer, I looked to this candle to see it was almost
                                completely finished, and in an incredibly interesting shape to boot. While this is incredibly mundane, looking at it 
                                makes me feel like an accomplished worker (and makes me wonder if I have secret candle powers).<br />
                                <strong>Rating:</strong> ★★★★☆
                            </p>
                        </Link></div>
                    </div>
            </main>
        </div>
    );
};

export default ExCollections;