import {Outlet, Link} from "react-router-dom";
import TrinketShowcase from "../../components/TrinketShowcase";

function DollCollection() {
    return(
        <div id="content">
            <main>
                <h1>Doll Collections</h1>
                <h4>These trinkets are dolls and figurines!</h4>
                <TrinketShowcase category="Doll" viewMode="full"/>
            </main>
        </div>
    );
};

export default DollCollection;
