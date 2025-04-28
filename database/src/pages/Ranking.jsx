import './css/Ranking.css'
import {Outlet, Link} from "react-router-dom";
function Ranking(){
    return (
        <div id="content">
            <main>
                    <h1>Leaderboard</h1>
                    <p>Ranking changes regularly because I'm indecisive!</p>
                    <section class="firstplace">
                        <div>
                            <h2>First Place: Me as a Rock</h2>
                            <img class="firstplaceimg" src="images/petrock.jpg"/>
                        </div></section>
                    <div class="columns">
                        <div class="ranking">
                            <img class="squareimg" src="images/macaron.jpg"/>
                            <h3>Second Place: Mia Macaron</h3></div>
                    
                        <div class="ranking">
                            <img class="squareimg" src="images/candle.jpg"/>
                            <h3>Third Place: Intriguing Candle</h3></div>
                    </div>
                </main>
        </div>
    );
};

export default Ranking;