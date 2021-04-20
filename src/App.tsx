import React from 'react';
import Banner from './components/Banner'
import Contacts from './components/Contacts'
import Home from './pages/Home'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
    return (
        <>
            <Router>
                <Banner />

                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/about">

                    </Route>

                    <Route path="/store">

                    </Route>

                    <Route path="/news">

                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <Contacts />
            </Router>
        </>
    );
}
