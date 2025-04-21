import './css/ExampleTrinket.css'
import TrinketShowcase from '../components/TrinketShowcase';
function ExTrinket () {
    return(
        <div id="content">
            <main id="trinketformat">
            <div>
                        <TrinketShowcase category="new" viewMode="full" />
                    </div>
            </main>
            <p class="collection-nav"><a href="./Collections">Back to Collections {'>'}{'>'}</a></p>
        </div>
    );
};

export default ExTrinket;