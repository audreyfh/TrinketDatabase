import './css/Example-Trinket.css'

function ExTrinket () {
    return(
        <div id="content">
            <main id="trinketformat">
                <h1 class="trinketh1">Intriguing Candle (EXAMPLE)</h1>
                <img class="fivebyfourimg" src="images/candle5x4.jpg" />
                <p><strong>Year:</strong> Unknown <br />
                    <strong>Est. Value:</strong> $5.50 <br />
                    <strong>Country of Origin:</strong> Unknown <br />
                    <strong>Description:</strong> After hours of slaving away at my computer, I looked to this candle to see it was almost
                    completely finished, and in an incredibly interesting shape to boot. While this is incredibly mundane, looking at it 
                    makes me feel like an accomplished worker (and makes me wonder if I have secret candle powers).<br />
                    <strong>Audrey's Rating:</strong> ★★★★☆ 
                </p>
            </main>
            <p class="collection-nav"><a href="./Collections">Back to Collections {'>'}{'>'}</a></p>
        </div>
    );
};

export default ExTrinket;