import "./css/FullTrinketDisplay.css";
import React, {useState} from "react";
import {Outlet, Link} from "react-router-dom";
import EditTrinket from "./EditTrinket";
import DeleteTrinket from "./DeleteTrinket";
const FullTrinketDisplay = (props) => {
    const rating = props.cat === "future" ? "Why I want it" : "Rating";
    const maintxt = props.cat === "new" ? `${props.name} (EXAMPLE)` : "";
    const classN = props.cat === "new" ? "trinketformat" : "collection";
    const hideclass = props.cat === "future" ? "hidebtn" : "";
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showTrinket, setShowTrinket] = useState(true);
    const [trinket, setTrinket] = useState(props);
    const imageSrc = `https://trinket-database-backend.onrender.com/${trinket.main_image}`;

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const editTrink = (trinket) => {
        setTrinket(trinket);
    };

    const hideTrinket = (trinket)  =>{
        setShowTrinket(false);
    };
    let link = "";
    if(props.cat === "future"){
        link = props.extraparam;
    } else {
        link = "";
    }

    function starRating(r) {
        if(isNaN(Number(r))) {
            return r;
        } else {
            let ratingVal = "";
            for(let i = Number(r); i >= 1; i--){
                ratingVal+="★";
            }
            while(ratingVal.length < 5){
                ratingVal+="☆";
            }
            return ratingVal;
        }
    }
    return (
        <>
            {showTrinket ? (
            <section>
                {showDeleteDialog ? (
                <DeleteTrinket
                    closeDialog={closeDeleteDialog}
                    _id={trinket._id}
                    name={trinket.name}
                    hideTrinket = {hideTrinket}
                />) : ("")}
                {showEditDialog ? 
                    <EditTrinket 
                        closeDialog={closeEditDialog}
                        editTrink={editTrink}
                        _id={trinket._id}
                        name={trinket.name}
                        year={trinket.year}
                        value={trinket.value}
                        origin={trinket.origin}
                        description={trinket.description}
                        rating={trinket.rating}
                        main_image={trinket.main_image}
                        categories={trinket.categories}
                    /> : ""}
                <h1>{maintxt}</h1>
                <section className = {classN}>
                    <div>
                        <Link to={`${link}`}><img src={imageSrc} alt={trinket.name}/></Link>
                    </div>
                    <div>
                    <Link to={`${link}`}><h3>{trinket.name}</h3></Link>
                        <p><strong>Year:</strong> {trinket.year}<br/>
                        <strong>Est. Value:</strong> {trinket.value}<br/>
                        <strong>Country of Origin:</strong> {trinket.origin} <br/>
                        <strong>Description:</strong> {trinket.description} <br/>
                        <strong>{rating}:</strong> {starRating(trinket.rating)}</p>
                        <div>
                            <button title="Edit Trinket" id="edit-trinket" className={hideclass} onClick={openEditDialog}>
                                &#9998;
                            </button>
                            <button title="Delete Trinket" id="delete-trinket" className={hideclass} onClick={openDeleteDialog}>
                                &#x2715;
                            </button>
                        </div>
                    </div></section>
                </section>
                ) : ("")}</>
    );
};

export default FullTrinketDisplay;