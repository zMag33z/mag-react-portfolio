import React from 'react';
import ContactNav from '../navigation/ContactNav'

export default function Contact() {
  return (
    <section className="Content">              
        <h3 id="Contact">Contact Me</h3>
        <ContactNav />
    </section>
  );
}

// add a form to leave name, email, and a message to me.  doesn't have to function to save the data just needs to take data and reset fields when submitted 
