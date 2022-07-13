import React from 'react';
import * as UI from './style';
import ButtonIcon from '../../../atoms/ButtonIcon';
import Close from '../../../../assets/svg/Close';

export interface Props {
  title?: string;
  subTitle?: string;
  primary?: boolean;
  onClose?: (e: any) => void;
}

const Header = ({ title, subTitle, primary, onClose }: Props) => {
  return (
    <UI.Container>
      <UI.Title primary={primary!}>{title}</UI.Title>
      {subTitle && <UI.SubTitle>{subTitle}</UI.SubTitle>}
      <UI.Close>
        <ButtonIcon onClick={onClose}>
          <Close />
        </ButtonIcon>
      </UI.Close>
    </UI.Container>
  );
};

Header.defaultProps = {
  primary: false,
};

export default Header;
