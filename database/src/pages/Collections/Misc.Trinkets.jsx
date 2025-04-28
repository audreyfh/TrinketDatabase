import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function MiscCollection() {
    return(
        <div id="content">
            <main>
                <h1>Miscellaneous Trinkets</h1>
                <h4>These trinkets don't fit in any particular category!</h4>
                <TrinketShowcase category="Misc." viewMode="full"/>
            </main>
        </div>
    );
};

export default MiscCollection;

