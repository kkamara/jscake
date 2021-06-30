import React from 'react';

type Props = {
  url: string;
  height?: number;
};

export const renderImage = (props: Props) => 
  <img src={props.url} height={props.height || 220} />;
