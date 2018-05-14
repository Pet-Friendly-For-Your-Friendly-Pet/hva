import React from 'react';
import classes from './Services.css'; 

import Fees from './Fees/Fees';
import Documents from './Documents/Documents';

const Services = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.feesContainer}>
                <Fees />
            </div>
            <div className={classes.documentsContainer}>
                <Documents />
            </div>
        </div>
    )
};

export default Services;