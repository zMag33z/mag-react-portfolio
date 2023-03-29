import React from 'react';
import ContactNav from '../navigation/ContactNav';
import MsgForm from './forms/MsgForm';

export default function Contact() {
  return (
    <>              
        <h3>Contact</h3>
        <ContactNav />
        <h3>Message</h3>
        <MsgForm />
    </>
  );
}
