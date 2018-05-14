import React, { Component } from 'react';
import classes from './Documents.css';

import RiskAndRelease from '../../../assets/documents/ACKNOWLEDGEMENT_OF_RISK_AND_RELEASE_OF_LIABILITY.pdf';
import BoardingAgreement from '../../../assets/documents/BOARDING_AGREEMENT.pdf';
import OpenRidingAgreement from '../../../assets/documents/OPEN_RIDING_AGREEMENT.pdf';

import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o';

class Documents extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h4 className={classes.header}>Documents</h4>
                <div className={classes.documentsContainer}>
                    <section className={classes.documentsBox}>
                        <ul>
                            <li><FaFilePdfO /> <a href={BoardingAgreement}>Boarding Agreement</a></li>
                            <li><FaFilePdfO /> <a href={OpenRidingAgreement}>Open Riding Agreement</a></li>
                            <li><FaFilePdfO /> <a href={RiskAndRelease}>Acknowledgement of Risk and Release of Liability</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
};
export default Documents