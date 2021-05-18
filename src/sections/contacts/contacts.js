import './contacts.css'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mnqlpzag");
    if (state.succeeded) {
        return <p>Thanks you for your message!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id="email" type="email" name="email" placeholder="Email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <textarea id="message" name="message" placeholder='Message' />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
    );
  }

export default function Contacts() {
    return (
        <>
            <div id='contacts' className='mr-masolov-section-heading'>
                <div className='mr-masolov-section-heading-inner'>
                    <h2>Contacts</h2>
                </div>
            </div>
            <div className='mr-masolov-contacts'>
                <div className='mr-masolov-contacts--form-wrapper'>
                    <p>
                        I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
                    </p>
                    <ContactForm /> 
                </div>
                <div className='mr-masolov-contacts--map-wrapper'>
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