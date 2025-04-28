import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function ForeignCollection() {
    return(
        <div id="content">
            <main>
                <h1>Foreign Trinkets</h1>
                <h4>These trinkets are from other countries, and reflect their cultures!</h4>
                <TrinketShowcase category="Foreign" viewMode="full"/>
            </main>
        </div>
    );
};

export default ForeignCollection;
