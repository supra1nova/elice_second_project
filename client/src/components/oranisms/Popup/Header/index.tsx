import React from 'react';
import * as UI from './style';
import Close from '../../../../assets/svg/Close';

export interface Props {
  title?: string;
  subTitle?: string;
  primary?: boolean;
  onClick?: (e: any) => void;
}

const Header = ({ title, subTitle, primary, onClick }: Props) => {
  return (
    <UI.Container>
      <UI.Title primary={primary!}>{title}</UI.Title>
      {subTitle && <UI.SubTitle>{subTitle}</UI.SubTitle>}
      <UI.Close>
        <Close onClick={onClick} />
      </UI.Close>
    </UI.Container>
  );
};

Header.defaultProps = {
  primary: false,
};

export default Header;
