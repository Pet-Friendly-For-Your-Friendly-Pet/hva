import React from 'react';
import classes from './Footer.css';
import Contact from './Contact/Contact';

import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import EmailIcon from 'react-icons/lib/fa/envelope';

const Footer = (props) => (
    <div className={classes.Footer}>
        <div className={classes.social}>
            <a href="#top"><FacebookIcon className={classes.facebook} /></a>
            <a href="#top"><EmailIcon className={classes.email}/></a>
        </div>
        <div></div>
        <Contact/> 
    </div>
)

export default Footer;