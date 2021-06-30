import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

type Props = {
    color?: string;
    loading?: boolean;
    override?: string;
}

const Loader = ({ 
    color, 
    loading, 
    override 
}: Props) =>
    <React.Fragment>
        <Helmet>
            <title>JS Cake 🎂</title>
        </Helmet>
        <CssBaseline />
        <Container maxWidth='xs'>
            <BeatLoader 
                color={color || "#42f5ef"} 
                loading={loading} 
                css={`left: 100px; position: relative; top: 250px; ${override}`} 
                size={50} 
            />
        </Container>
    </React.Fragment>;

export default Loader;
