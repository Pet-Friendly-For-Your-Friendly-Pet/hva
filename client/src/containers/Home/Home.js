import React, { Component } from 'react';
import classes from './Home.css';

import Gallery from './Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    state = {
    }
    //Add methods below, above render()
    
    render() {
        return (
            <div>
                <Gallery />
                <Footer />
            </div> 
        );
    }
}

export default Home;