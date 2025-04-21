import './css/Contact.css'
import React from "react";
import {useState} from "react";
function Contact(){
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2e66af08-5589-4e66-ab77-1e5cab48f56d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div id="content">
            <main>
                <section className="contact">
                    <h1>Contact Me!</h1>
                    <h3 id="contact-h3">Have any questions, comments, or concerns regarding a trinket? Fill 
                        out the form and I'll get back to you ASAP!
                    </h3>
                        <form onSubmit={onSubmit}>
                            <p className="contactform">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p class="contactform">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </p>
                            <p class="contactform">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" required />
                            </p>
                            <p>
                                <button type="submit">Submit</button>
                            </p>
                        </form>
                    <span>{result}</span>
                </section>
            </main>
        </div>
    );
};

export default Contact;