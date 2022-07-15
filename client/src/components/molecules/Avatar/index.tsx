import React from 'react';
import Image from '../../atoms/Image';
import AvatarImage from '../../atoms/AvatarImage';
import * as UI from './style';

interface Props {
  image: string | undefined;
  userId?: string;
}

const Avatar = ({ image, userId }: Props) => {
  console.log(image);
  return (
    <UI.Container>
      <UI.AvatarImage>
        {/* 실제 이미지 들어가면 다시 테스트 해봐야함~ */}
        <AvatarImage />
        {image ? <Image image={image} /> : null}
      </UI.AvatarImage>
      <UI.AvatarId>{userId}</UI.AvatarId>
    </UI.Container>
  );
};

export default Avatar;
