import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import "./../../../node_modules/flickity/dist/flickity.min.css";
import "./carouselext.css";
import Flickity from 'react-flickity-component'


const flickityOptions = {

    wrapAround: true,
    freeScroll: true,
    pageDots: false,
    imagesLoaded: true,
    prevNextButtons: false,
    autoPlay: 1500,
    contain: true,
    initialIndex: 2
}

var divStyleImg = {
    height: 'auto',
    width: '100%',
    borderRadius: '16px',
};

//https://source.unsplash.com/collection/136095/900x400

function Carousel(props) {
    return (
        <div>
            {/* <div className="carousel" data-flickity='{ "wrapAround": true, "freeScroll": true, "pageDots": false, "imagesLoaded": true, "prevNextButtons": false, "autoPlay": 1500, "adaptiveHeight": true, "contain": true}'> */}
            <Flickity className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate={true} // default false
                static // default false
            >
                <div className="carousel-cell">
                    <img src="https://source.unsplash.com/collection/136095/900x400" style={divStyleImg}></img>
                </div>
                <div className="carousel-cell">
                    <img src="https://source.unsplash.com/collection/136096/900x400" style={divStyleImg}></img>
                </div>
                <div className="carousel-cell">
                    <img src="https://source.unsplash.com/collection/136091/900x400" style={divStyleImg}></img>
                </div>
            </Flickity>
            {/* </div> */}

        </div>
    );
}

export default Carousel;