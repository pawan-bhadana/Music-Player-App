import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardGroupHeading from './../CardGroupHeading/CardGroupHeading';
import CardGroup from "./../Card/CardGroup";

function Favourites() {
    return(
        <div>
            <CardGroupHeading
                name="Favourites"
            />
            <CardGroup/>
        </div>

    );
}

export default Favourites;