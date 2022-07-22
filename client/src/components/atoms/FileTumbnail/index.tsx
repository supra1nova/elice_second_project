import React, { useState } from 'react';
import ButtonIcon from '../ButtonIcon';
import Image from '../Image';
import { Close } from '../../../assets/svg';
import * as UI from './style';
interface Props {
  image: string;
  onClick: any;
}

const FileTumbnail = ({ onClick, image }: Props) => {
  return (
    <UI.Container>
      <UI.Preview>
        <UI.Image>
          <Image image={image} />
        </UI.Image>
        <UI.Delete>
          <ButtonIcon onClick={onClick}>
            <Close fill='#fff' />
          </ButtonIcon>
        </UI.Delete>
      </UI.Preview>
    </UI.Container>
  );
};

export default FileTumbnail;
