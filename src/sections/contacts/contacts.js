import "./contacts.css";
import React from "react";
import {useForm, ValidationError} from "@formspree/react";

function ContactForm(props) {
    const [state, handleSubmit] = useForm("mnqlpzag");
    if (state.succeeded) {
        return (
            <div className="mr-masolo-contacts--form-success">
                <p>
                    Thank you{" "}
                    <strong>
                        {props.visitorName ? props.visitorName : "Mystery Man"}
                    </strong>
                    , for your message!
                    <br/>
                    I'll get back to you shortly.
                </p>
            </div>
        );
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id="email" type="email" name="email" placeholder="Email"/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
            <textarea id="message" name="message" placeholder="Message"/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default function Contacts(props) {
    return (
        <>
            <div className="mr-masolov-section-heading" id="contacts">
                <div className="mr-masolov-section-heading-inner">
                    <h2>Contact</h2> | <h2>Channels to drop me a line & get in touch</h2>
                </div>
            </div>
            <div className="mr-masolov-contacts">
                <div className="mr-masolov-contacts--form-wrapper">
                    <p>
                        <i className="fa fa-phone"/> (+371) 2 9823196
                    </p>
                    <p>
                        <i className="fa fa-envelope"/> filips.masolovs@gmail.com
                    </p>
                    <p>
                        <a
                            className="mr-masolov-contacts--social"
                            href="https://www.linkedin.com/in/filips-masolovs-46068474/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-linkedin fa-2x"/>
                        </a>
                        <a
                            className="mr-masolov-contacts--social"
                            href="https://github.com/FilipsMasolovs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-github fa-2x"/>
                        </a>
                        <a
                            className="mr-masolov-contacts--social"
                            href="https://profiles.wordpress.org/filipsmasolovs/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-wordpress fa-2x"/>
                        </a>
                    </p>
                    <p>
                        I’m interested in freelance opportunities – especially ambitious or
                        large projects. However, if you have other request or question,
                        don’t hesitate to use the form.
                    </p>
                    <ContactForm visitorName={props.visitorName}/>
                </div>
                <div className="mr-masolov-contacts--map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8979326.311605155!2d14.789861258475694!3d56.670493528307055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ef257b210ed5af%3A0x5d9da105e2ab7bb7!2sLoka%20ma%C4%A3istr%C4%81le%2023%2C%20Jelgava%2C%20LV-3004!5e0!3m2!1sen!2slv!4v1632997970449!5m2!1sen!2slv" width="100%" height="100%" style={{border:0}} title="MAP" loading="lazy"></iframe>
                </div>
            </div>
        </>
    );
}
