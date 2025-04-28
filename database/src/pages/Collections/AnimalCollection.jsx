import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function AnimalCollection() {
    return(
        <div id="content">
            <main>
                <h1>Animal Trinkets</h1>
                <h4>These trinkets are made to resemble animals!</h4>
                <TrinketShowcase category="Animal" viewMode="full"/>
            </main>
        </div>
    );
};

export default AnimalCollection;
