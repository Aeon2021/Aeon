import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Login from './login';
import Upload from './upload';
import Dashboard from './dashboard';
import ImageView from './imageview';

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/upload" component = {Upload} />
            <Route path = "/dashboard" component = {Dashboard} />
            <Route path = "/imageview" component = {ImageView} />
        </Router>
    );
};
export default Webpages;