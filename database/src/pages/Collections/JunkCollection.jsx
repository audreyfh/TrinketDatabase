import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function JunkCollection() {
    return(
        <div id="content">
            <main>
                <h1>Junk Trinkets</h1>
                <h4>These trinkets are worthless garbage!</h4>
                <TrinketShowcase category="Junk" viewMode="full"/>
            </main>
        </div>
    );
};

export default JunkCollection;
