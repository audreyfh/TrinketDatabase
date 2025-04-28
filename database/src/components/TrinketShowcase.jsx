import "./css/Trinkets.css"
import {useState, useEffect} from "react";
import axios from "axios";
import FullTrinketDisplay from "./FullTrinketDisplay";
import PartialTrinketDisplay from "./PartialTrinketDisplay";
import AddTrinket from "./AddTrinket";

const collectionarray = ["Collectible", "Vintage", "Foreign", "Junk", "Animal", "Cute", "Doll", "Misc."];
const TrinketShowcase = ({category, viewMode}) => {
    const [trinkets, setTrinkets] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    //after page loaded to asynch json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("https://trinket-database-backend.onrender.com/api/trinkets");
            setTrinkets(response.data);
        })();
    },[]);
    const addTrink = (trinket) =>{
        setTrinkets((trinkets) => [...trinkets, trinket]);
    };
    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    let hideclass = "hidebtn";

    const RenderMode = viewMode === "simple" ? PartialTrinketDisplay : FullTrinketDisplay;

    const filtered = trinkets.filter(t => {
        if (viewMode === "simple") {
            if (category === "home") {
                return t.categories?.includes("home");
            } else {
                return collectionarray.some(item => t.categories[0]?.includes(item));
            }
        } else {
            hideclass = category === "future" ? "hidebtn" : "";
            return t.categories?.includes(category);
        }
    });
    return (
        <>
            <button title="New Trinket" id="add-trinket" class={hideclass} onClick={openAddDialog}>
                    +
            </button>
            {showAddDialog ? (
                <AddTrinket addTrink={addTrink} closeDialog={closeAddDialog} category={category}/>
            ): ("")}
            
            <div className="trinketcolumns">
                {filtered.map((trinket)=>(
                    <RenderMode
                    _id={trinket._id}
                    cat = {category}
                    name={trinket.name}
                    year={trinket.year} 
                    value={trinket.value}
                    origin={trinket.origin}
                    description={trinket.description}
                    rating={trinket.rating}
                    main_image={category === "new"? trinket.image5by4 : trinket.imagesquare}
                    sub_image={category === "home"? trinket.image2by1 : trinket.imagesquare}
                    categories={trinket.categories}
                    label={category === "home"? trinket.extraparam : `${trinket.categories[0]} Trinkets`}
                    link = {`../Collections/${trinket.categories[0]}Collection`}
                    extraparam={trinket.extraparam}/>
                ))}
            </div>
        </>
    );
};

export default TrinketShowcase;