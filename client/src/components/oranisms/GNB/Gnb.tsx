import { Link } from 'react-router-dom';
import * as UI from './style';
import GnbNotUser from './GNBNotUser';
import GNBUser from './GNBUser';
import GNBAdmin from './GNBAdmin';
import GNBOwner from './GNBOwner';
import { useEffect } from 'react';
import * as Icon from '../../../assets/svg';

export const Gnb = () => {
  return (
    <UI.Container>
      <UI.Logo>
        <img
          style={{}}
          src={process.env.PUBLIC_URL + '/images/serviceLogo.png'}
        />
      </UI.Logo>
      <UI.InfoWrapper>
        <UI.ProfileImg>
          <Icon.Profile width={42} height={42} fill={'#64AD57'} />
        </UI.ProfileImg>
        <UI.UserInfoWrapper>
          <UI.Greetings>안녕하세요 000님</UI.Greetings>
          <UI.UserInfo>방문예정: 1건 or 소유 shop</UI.UserInfo>
        </UI.UserInfoWrapper>
        <UI.MenuContainer>
          <UI.MenuTitle>MENU</UI.MenuTitle>
          <UI.MenuList>
            <UI.Menu></UI.Menu>
            <UI.Menu></UI.Menu>
            <UI.Menu></UI.Menu>
            <UI.Menu></UI.Menu>
          </UI.MenuList>
        </UI.MenuContainer>

        {/* <GnbNotUser></GnbNotUser> */}
        {/* <GNBUser></GNBUser> */}
        {/* <GNBOwner></GNBOwner> */}
        <GNBAdmin></GNBAdmin>
      </UI.InfoWrapper>
      <UI.Footer>
        <UI.Description>소개 · TEAM MEMBER</UI.Description>
        <UI.Description>
          © 2022 Elice TEAM 3 Co., Ltd. All rights reserved.
        </UI.Description>
      </UI.Footer>
    </UI.Container>
  );
};
