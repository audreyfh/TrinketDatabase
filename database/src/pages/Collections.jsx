import TrinketShowcase from '../components/TrinketShowcase';
import './css/Collections.css'

function Collections(){
    return (
        <div id="content">
            <main>
                    <h2>Collections</h2>
                    <div>
                        <TrinketShowcase category="other" viewMode="simple" />
                    </div>
                </main>
        </div>
    );
};

export default Collections;
