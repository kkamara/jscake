import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./components/HomePage"

import './index.css'

const App = () => (
    <div id='app'>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    </div>
)

export default App
