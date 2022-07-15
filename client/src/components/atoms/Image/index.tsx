import React from 'react';
import * as UI from './style';

interface Props {
  image: string | undefined;
}

const Image = ({ image }: Props) => {
  console.log(image);
  return <UI.Image src={image} />;
};

export default Image;
