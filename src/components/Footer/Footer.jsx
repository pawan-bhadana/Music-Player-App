import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';


var divStyle = {
    left: '0',
    bottom: '0',
    width: '100%',
    position: 'absolute',

    backgroundColor: '#222',
    color: 'white',
    textAlign: 'center',
};

function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start" style={divStyle}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 col-md-3 mb-4 mb-md-0 mr-auto">
                        <NavLink to="/aboutus" className="nav-link"><h5>About Us</h5></NavLink>
                    </div>

                    <div className="col-lg-3 col-md-3 mb-4 mb-md-0 mr-auto">
                        <NavLink to="/contactus" className="nav-link"><h5>Contact Us</h5></NavLink>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0 mr-auto">
                        <span className="col-lg-2 col-md-2 mb-4 mb-md-0">
                            <IconButton color="primary">
                                <FacebookIcon/>
                            </IconButton>
                        </span>
                        <span className="col-lg-2 col-md-2 mb-4 mb-md-0">
                            <IconButton color="primary">
                                <LinkedInIcon/>
                            </IconButton>
                        </span>
                        <span className="col-lg-2 col-md-2 mb-4 mb-md-0">
                            <IconButton color="primary">
                                <GitHubIcon/>
                            </IconButton>

                        </span>

                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                Made with &hearts; by Rahul and Pranaw.
            </div>
        </footer>
    );
}
export default Footer;