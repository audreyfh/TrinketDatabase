import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function CuteCollection() {
    return(
        <div id="content">
            <main>
                <h1>Cute Trinkets</h1>
                <h4>These trinkets are especially adorable!</h4>
                <TrinketShowcase category="Cute" viewMode="full"/>
            </main>
        </div>
    );
};

export default CuteCollection;
