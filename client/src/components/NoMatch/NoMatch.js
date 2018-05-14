import React from 'react';
import classes from './NoMatch.css';


const NoMatch = () => (
    <div className={classes.container}>
        <img className={classes.bg} src='http://www.pngmart.com/files/4/Desert-PNG-Clipart.png' alt="DesertVoid" />
        <h1 className={classes.eep}>Eeep!</h1>
        <h2 className={classes.issue}>The requested route cannot be found!</h2>
    </div>
)
            



export default NoMatch;