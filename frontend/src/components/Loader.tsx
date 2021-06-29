import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

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
    <PacmanLoader 
        color={color || "#42f5ef"} 
        loading={loading} 
        css={override} 
        size={150} 
    />;

export default Loader;
