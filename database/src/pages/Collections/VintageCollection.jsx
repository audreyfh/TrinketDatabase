import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function VintageCollection() {
    return(
        <div id="content">
            <main>
                <h1>Vintage Trinkets</h1>
                <h4>These trinkets are particularly old!</h4>
                <TrinketShowcase category="Vintage" viewMode="full"/>
            </main>
        </div>
    );
};

export default VintageCollection;
