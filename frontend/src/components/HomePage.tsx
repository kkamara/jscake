import React, { Fragment } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { Helmet } from "react-helmet";

import './HomePage.css';

function App() {
    return (
        <div className="App">
            <Fragment>
                <Helmet>
                    <title>JS Cake 🎂</title>
                </Helmet>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Typography 
                        component="div" 
                        style={{ backgroundColor: '#cfe8fc', height: '100vh' }} 
                    />
                </Container>
            </Fragment>
        </div>
    );
}

export default App;
