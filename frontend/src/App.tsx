import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CakePage from "./components/CakePage";

import './index.css';

const App = () => (
    <div id='app'>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/:id" exact component={CakePage} />
                {/* <Route path="/404" exact component={Page404} /> */}
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
