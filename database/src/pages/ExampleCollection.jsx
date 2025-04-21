import {Outlet, Link} from "react-router-dom";
import './css/ExampleCollection.css'
import TrinketShowcase from "../components/TrinketShowcase";

function ExCollections() {
    return(
        <div id="content">
            <main>
                <h1>Example Collection</h1>
                <h4>Click on any trinket to learn more about it!</h4>
                <TrinketShowcase category="example" viewMode="full"/>
            </main>
        </div>
    );
};

export default ExCollections;
