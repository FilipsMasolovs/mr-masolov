import './contacts.css'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mnqlpzag");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
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
                <ContactForm /> 
            </div>
        </>
    );
}