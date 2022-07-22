import { Link, useNavigate } from 'react-router-dom';
import * as UI from './style';
import GnbNotUser from './GNBNotUser';
import { useEffect, useState } from 'react';
import * as Icon from '../../../assets/svg';
import * as API from '../../../api/api';

export const Gnb = () => {
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [log, setLog] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      API.userGet('/api/users/user').then((res) => {
        setRole(res.role);
        setImage(res.image);
        setName(res.name);
      });
    }
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    setLog(false);
    setRole('');
    setImage('');
    setName('');
    alert('로그아웃 되었습니다');
    navigate('/');
  };

  useEffect(() => {
    setLog(true);
  }, [log]);

  if (role === '') {
    return (
      <UI.Container>
        <Link to='/'>
          <UI.Logo>
            <img
              style={{}}
              src={process.env.PUBLIC_URL + '/images/serviceLogo.png'}
            />
          </UI.Logo>
        </Link>
        <GnbNotUser></GnbNotUser>
      </UI.Container>
    );
  } else {
    return (
      <UI.Container>
        <Link to='/'>
          <UI.Logo>
            <img
              style={{}}
              src={process.env.PUBLIC_URL + '/images/serviceLogo.png'}
            />
          </UI.Logo>
        </Link>
        <UI.InfoWrapper>
          <UI.ProfileImg>
            {image ? (
              <img src={image} style={{ width: '100%', minHeight: '30px' }} />
            ) : (
              <Icon.Profile width={42} height={42} fill={'#64AD57'} />
            )}
          </UI.ProfileImg>
          <UI.UserInfoWrapper>
            <UI.Greetings>
              안녕하세요 <br></br>
              {name}님
            </UI.Greetings>
            {/* {role === 'admin' ? null : (
              <UI.UserInfo>
                {role === 'user' ? `방문예정: ${1}건` : `업체명: ${123}`}
              </UI.UserInfo>
            )} */}
          </UI.UserInfoWrapper>
          <UI.MenuContainer>
            <UI.MenuTitle>MENU</UI.MenuTitle>
            <UI.MenuList>
              <Link to='/'>
                <UI.MenuWrapper>
                  <Icon.Home width={18} height={15.3} />
                  <UI.MenuName>홈</UI.MenuName>
                </UI.MenuWrapper>
              </Link>
              {role === 'user' ? (
                <>
                  <Link to='/account/reserves'>
                    <UI.MenuWrapper>
                      <Icon.Calender width={18} height={18} />
                      <UI.MenuName>나의 예약</UI.MenuName>
                    </UI.MenuWrapper>
                  </Link>
                  <Link to='/account/likes'>
                    <UI.MenuWrapper>
                      <Icon.Heart width={18} height={16.71} fill={'#A6A8A3'} />
                      <UI.MenuName>찜</UI.MenuName>
                    </UI.MenuWrapper>
                  </Link>
                </>
              ) : (
                <Link to='/account/restaurants'>
                  <UI.MenuWrapper>
                    <Icon.Setting width={18} height={18} />
                    <UI.MenuName>
                      {role === 'admin' ? '관리자' : '레스토랑 관리'}
                    </UI.MenuName>
                  </UI.MenuWrapper>
                </Link>
              )}
              <Link to='/users/security'>
                <UI.MenuWrapper>
                  <Icon.Profile width={18} height={18} />
                  <UI.MenuName>계정관리</UI.MenuName>
                </UI.MenuWrapper>
              </Link>
              <button onClick={() => logOut()}>
                <UI.MenuWrapper>
                  <Icon.Exit width={18} height={16.2} />
                  <UI.MenuName>로그아웃</UI.MenuName>
                </UI.MenuWrapper>
              </button>
            </UI.MenuList>
          </UI.MenuContainer>
        </UI.InfoWrapper>
        <UI.Footer>
          <UI.Description>미식시간 · TEAM 3</UI.Description>
          <UI.Description>
            © 2022 Elice TEAM 3 Co., Ltd. All rights reserved.
          </UI.Description>
        </UI.Footer>
      </UI.Container>
    );
  }
};
