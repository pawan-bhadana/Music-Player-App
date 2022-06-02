import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function CardGroupHeading(props) {
    return(
        <div>
            <h1 className="header">{props.name}</h1>
        </div>
    );
}

export default CardGroupHeading;