import "./ContactFormStyles.css";

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Add a Message to us!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Meassage" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
