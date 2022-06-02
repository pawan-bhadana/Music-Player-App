import React from 'react';
import "./Loader.css";

function Loader() {
    return(
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5 parentLoader">
            <div className="loader"></div>

        </div>
    );
}

export default Loader;