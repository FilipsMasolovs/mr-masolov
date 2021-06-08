import "./contacts.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

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
          <br />
          I'll get back to you shortly.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input id="email" type="email" name="email" placeholder="Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
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
          <h2>Contacts</h2>
        </div>
      </div>
      <div className="mr-masolov-contacts">
        <div className="mr-masolov-contacts--form-wrapper">
          <p>
            <i className="fa fa-phone" /> (+371) 2 9823196
          </p>
          <p>
            <i className="fa fa-envelope" /> filips.masolovs@gmail.com
          </p>
          <p>
            <a
              className="mr-masolov-contacts--social"
              href="https://www.linkedin.com/in/filips-masolovs-46068474/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin fa-2x" />
            </a>
            <a
              className="mr-masolov-contacts--social"
              href="https://github.com/FilipsMasolovs"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github fa-2x" />{" "}
            </a>
          </p>
          <p>
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
          <ContactForm visitorName={props.visitorName} />
        </div>
        <div className="mr-masolov-contacts--map-wrapper">
          <div>
            <span>Filips Masolovs</span>
            <span>Liela iela 14-15</span>
            <span>Jelgava, Latvia</span>
            <span>LV-3001</span>
          </div>
        </div>
      </div>
    </>
  );
}
