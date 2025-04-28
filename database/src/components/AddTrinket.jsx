import "./css/Dialog.css";
import React, {useState} from "react";

const AddTrinket = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");

      const formData = new FormData(event.target);
      const categories = [props.category]; // Wrap the category in an array
      formData.append("categories", JSON.stringify(categories)); // Send as a JSON string

      const response = await fetch("https://trinket-database-backend.onrender.com/api/trinkets", {
        method: "POST",
        body: formData, 
      });

      if (response.status === 200) {
        setResult("Trinket Successfully Added");
        event.target.reset(); //reset your form fields
        props.addTrink(await response.json());
        props.closeDialog();
      } else {
        console.log("Error adding trinket", response);
        setResult(response.message);
      }

    };

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

    return (
        <React.Fragment>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

        <div id="add-dialog" className="w3-modal">
          <div className="w3-modal-content">
            <div className="w3-container">
              <span
                id="dialog-close"
                className="w3-button w3-display-topright" onClick = {props.closeDialog}
              >
                &times;
              </span>
              <form id="add-property-form" onSubmit={onSubmit}>
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
                  <label htmlFor="year">Year Created (Type N/A if Unknown):</label>
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
                  <label htmlFor="value">Estimated Value (Type N/A if Unknown):</label>
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
                  <label htmlFor="origin">Country of Origin (Type N/A if Unknown):</label>
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
                    type="number"
                    id="rating"
                    name="rating"
                    min="1"
                    max="5"
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
                      inputs.img != null ? URL.createObjectURL(inputs.img) : ""
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

export default AddTrinket;