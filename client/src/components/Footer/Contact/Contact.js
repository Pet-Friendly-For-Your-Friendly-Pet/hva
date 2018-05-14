import React from 'react';
import classes from './Contact.css';

//Change the phone number below to whichever one is given
const Contact = () => (
    <footer className={classes.footer}>
        <a className={classes.contact} href="tel:+18005550199">1-800-555-0199</a>
    </footer>
);

export default Contact;