import React from 'react';

type renderImageProps = {
  url: string;
  height?: number;
};
export const renderImage = (props: renderImageProps) => 
  <img src={props.url} height={props.height || 220} />;
