import React from 'react';
import * as UI from './style';
import Close from '../../../../assets/svg/Close';

export interface Props {
  title?: string;
  subTitle?: string;
  primary?: boolean;
  onClick?: () => void;
}

const Header = ({ title, subTitle, primary, onClick }: Props) => {
  return (
    <UI.Container>
      <UI.Title primary>{title}</UI.Title>
      {subTitle && <UI.SubTitle>{subTitle}</UI.SubTitle>}
      <UI.Close>
        <Close />
      </UI.Close>
    </UI.Container>
  );
};

export default Header;
