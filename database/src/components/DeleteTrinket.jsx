import "./css/Dialog.css";
import React, { useState } from "react";

const DeleteTrinket = (props) => {
  const [result, setResult] = useState("");

  const deleteTrinket = async (event) => {
    const response = await fetch(
      `https://trinket-database-backend.onrender.com/api/trinkets/${props.ranking_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Trinket Successfully deleted");
      props.hideTrinket();
      props.closeDialog();
    } else {
      console.log("Error deleting trinket", response);
      setResult(response.message);
    }

    props.closeDialog();
  };

  return (
    <React.Fragment>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <div id="delete-dialog" className="w3-modal">
        <div className="w3-modal-content">
            <div className="w3-container">
            <span
                id="dialog-close"
                className="w3-button w3-display-topright"
                onClick={props.closeDialog}
            >
                &times;
            </span>
            <div id="delete-content">
                <h3>Are you sure you want to delete {props.name}?</h3>
                <section>
                <button onClick={deleteTrinket}>Yes</button>
                <button onClick={props.closeDialog}>No</button>
                </section>
                <span>{result}</span>
            </div>
            </div>
        </div>
    </div></React.Fragment>
  );
};

export default DeleteTrinket;