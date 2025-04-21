import TrinketShowcase from '../components/TrinketShowcase';
import './css/Future.css'

function FutureTrinkets(){
    return (
        <div id="content">
            <main id="futuremain">
                    <h1>Future Trinkets</h1>
                    <h4>These are Trinkets I want to add to my collection!</h4>
                    <p>click on any image to view its source.</p>
                    <div>
                        <TrinketShowcase category="future" viewMode="full" />
                    </div>
            </main>
        </div>
    );
};

export default FutureTrinkets;