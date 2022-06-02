import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


function MyMusic() {
    return (
        <div>
            <div className="d-flex justify-content-center align-content-center align-items-center">
                <h1>Welcome to My Music Page</h1>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <CircularProgress color="secondary" />
            </div>
        </div>
    );
}

export default MyMusic;