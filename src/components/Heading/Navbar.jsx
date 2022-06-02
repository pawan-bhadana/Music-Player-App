import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IconButton from '@material-ui/core/IconButton';
import TranslateRoundedIcon from '@material-ui/icons/TranslateRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow">
                <div className="container">
                    <NavLink exact to="/" className="navbar-brand mr-1">Gaana Bajaa-na</NavLink>

                    <IconButton className="pull-left navbar-toggler" data-toggle="collapse" data-target="#navid">
                        <MenuRoundedIcon color="primary" />
                    </IconButton>

                    <div className="collapse navbar-collapse ml-lg-5" id="navid">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link my-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/mymusic" className="nav-link my-link">My Music</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/help" className="nav-link my-link">Help</NavLink>
                            </li>

                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <IconButton href="/search">
                                    <SearchRoundedIcon color="primary" />
                                </IconButton>
                            </li>
                            <li className="nav-item">
                                <IconButton color="primary">
                                    <TranslateRoundedIcon />
                                </IconButton>
                            </li>
                            <li className="nav-item">
                                <IconButton color="primary">
                                    <Brightness4RoundedIcon />
                                </IconButton>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}
export default Navbar;