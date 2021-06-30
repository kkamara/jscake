import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

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
    <BeatLoader 
        color={color || "#42f5ef"} 
        loading={loading} 
        css={`left: 100px; position: relative; top: 250px; ${override}`} 
        size={50} 
    />;

export default Loader;
