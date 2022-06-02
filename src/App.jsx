import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/flickity/dist/flickity.pkgd.min.js';
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Help from "./Pages/Help";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs"
import MyMusic from "./Pages/MyMusic"
import Navbar from './components/Heading/Navbar';
import Footer from './components/Footer/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {


    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/search" component={Search}></Route>
                <Route exact path="/help" component={Help}></Route>
                <Route exact path="/aboutus" component={AboutUs}></Route>
                <Route exact path="/contactus" component={ContactUs}></Route>
                <Route exact path="/mymusic" component={MyMusic}></Route>
                <Redirect to="/"/>
            </Switch>
            <Footer />
        </>
    );
}
export default App;