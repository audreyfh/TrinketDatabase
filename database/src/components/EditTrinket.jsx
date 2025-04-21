import "./css/Dialog.css";
import React, {useState} from "react";

const EditTrinket = (props) => {
    const [inputs, setInputs] = useState({
        ranking_id: props.ranking_id,
        name: props.name,
        year: props.year,
        value: props.value,
        origin: props.origin,
        description: props.description,
        rating: props.rating,
        prev_img: props.main_image,
      });

    const [result, setResult] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name]: value }));
    };
  
    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({...values, [name]: value}));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        console.log("id"+ props.ranking_id);
        console.log("image id:" + props.main_image);
        const response = await fetch(
        `https://trinket-database-backend.onrender.com/api/trinkets/${props.ranking_id}`,
        {
            method: "PUT",
            body: formData,
        }
        );

        if (response.status === 200) {
        setResult("Trinket Updated!");
        event.target.reset(); //reset your form fields
        props.editTrink(await response.json());
        props.closeDialog();
        } else {
        console.log("Error editing trinket", response);
        setResult(response.message);
        }
    };

    return (
            <React.Fragment>
              <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    
            <div id="edit-dialog" className="w3-modal">
              <div className="w3-modal-content">
                <div className="w3-container">
                  <span
                    id="dialog-close"
                    className="w3-button w3-display-topright"
                    onClick = {props.closeDialog}
                  >
                    &times;
                  </span>
                  <form id="edit-property-form" onSubmit={onSubmit}>
                    <p>
                      <label htmlFor="name ">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="year">Year Created:</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        value={inputs.year || ""}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="value">Estimated Value:</label>
                      <input
                        type="text"
                        id="value"
                        name="value"
                        value={inputs.value || ""}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="origin">Country of Origin:</label>
                      <input
                        type="text"
                        id="origin"
                        name="origin"
                        value={inputs.origin || ""}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="description">Description:</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                      />
                    </p>
                    <p>
                      <label htmlFor="rating">Rating (Out of 5 Stars):</label>
                      <input
                        type="text"
                        id="rating"
                        name="rating"
                        value={inputs.rating || ""}
                        onChange={handleChange}
                        required
                      />
                    </p>
                   <section className="columns">
                    <p id="img-prev-section">
                      <img
                        id="img-prev"
                        src={
                            inputs.img != null
                            ? URL.createObjectURL(inputs.img)
                            : inputs.prev_img != null
                            ? `https://trinket-database-backend.onrender.com/${inputs.prev_img}`
                            : ""
                        }
                        alt=""
                      />
                    </p>
                    <p id="img-upload">
                      <label htmlFor="img">Upload Image:</label>
                      <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </p>
                   </section>
                    <p>
                      <button type="submit">Submit</button>
                    </p>
                    <p></p>
                  </form>
                  <p>{result}</p>
                </div>
              </div>
            </div></React.Fragment>
    );
};

export default EditTrinket;