import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function CollectibleCollection() {
    return(
        <div id="content">
            <main>
                <h1>Collectible Trinkets</h1>
                <h4>These trinkets were made to be collected, and usually exist as part of a set!</h4>
                <TrinketShowcase category="Collectible" viewMode="full"/>
            </main>
        </div>
    );
};

export default CollectibleCollection;
