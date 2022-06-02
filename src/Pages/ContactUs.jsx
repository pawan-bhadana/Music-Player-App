import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


function ContactUs() {
    return(
        <div>
            <div className="d-flex justify-content-center align-content-center align-items-center">
                <h1>Contact Us</h1>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <CircularProgress color="secondary" />
            </div>
        </div>
    );
}

export default ContactUs;