import React from 'react';
import Image from '../../atoms/Image';
import AvatarImage from '../../atoms/AvatarImage';
import * as UI from './style';

interface Props {
  image: string | undefined;
  userId?: string;
}

const Avatar = ({ image, userId }: Props) => {
  return (
    <UI.Container>
      <UI.AvatarImage>
        {image ? <Image image={image} /> : <AvatarImage />}
      </UI.AvatarImage>
      <UI.AvatarId>{userId}</UI.AvatarId>
    </UI.Container>
  );
};

export default Avatar;
