import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardMusic from "./CardMusic";
import "./../../../node_modules/flickity/dist/flickity.min.css";


function CardGroupSearch(props) {

    var arr = []
    for (let i = 0; i < props.params.length; i++) {
        const element = props.params[i];
        arr.push(element);
    }
    // row row-cols-1 row-cols-md-2 g-4
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {/* <div className="col-lg-3"> */}
                    {
                        arr.map((p, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 py-3" key={index}>
                                    <CardMusic trackName={p.trackName} artists={p.artists} imageUrl={p.imageUrl} trackPreviewUrl={p.trackPreviewUrl} playMusic={props.playMusic} />
                                </div>
                            );
                        })
                    }
                {/* </div> */}
            </div>
        </div>
    );
}

export default CardGroupSearch;