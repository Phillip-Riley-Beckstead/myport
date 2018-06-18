import React from 'react';
import Home from './Home'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import Contact from './Contact'
import WorkHistory from './WorkHistory'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/ContactMe" component={Contact}/>
            <Route path="/WorkHistory" component={WorkHistory}/>
        </Switch>
    </Router>
)
