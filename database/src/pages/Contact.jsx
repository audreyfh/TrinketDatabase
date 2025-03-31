import './css/Contact.css'

function Contact(){
    return (
        <div id="content">
            <main>
                <section class="contact">
                    <h1>Contact Me!</h1>
                    <h3 id="contact-h3">Have any questions, comments, or concerns regarding a trinket? Fill 
                        out the form and I'll get back to you ASAP!
                    </h3>

                    <form id="contact-me"
                    action="https://api.web3forms.com/submit"
                    method="POST">

                        <input type="hidden" name="access_key" value="2e66af08-5589-4e66-ab77-1e5cab48f56d"/>

                        <p class="contactform">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p class="contactform">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                        <p class="contactform">
                            <label for="message">Message:</label>
                            <input type="text" id="message" name="message" required />
                        </p>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                        <p>
                            <button type="submit">Submit</button>
                        </p>
                    </form>
                    <h3 id="result"></h3>
                </section>
            </main>
        </div>
    );
};

export default Contact;