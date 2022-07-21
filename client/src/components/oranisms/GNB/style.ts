import styled from 'styled-components';

export const Container = styled.section`
  width: 233px;
  height: 100vh;
  padding: 17px 30px 17px 20px;
  position: fixed;
  background-color: #f4f6f3;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  height: 60px;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  padding-top: 30px;
`;

export const Description = styled.p`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font3};
  margin-bottom: 5px;
`;

export const Footer = styled.footer`
  margin-top: auto;
`;

export const ProfileImg = styled.div`
  width: 42px;
  height: 42px;
`;

export const UserInfoWrapper = styled.div``;

export const Greetings = styled.div``;

export const UserInfo = styled.div``;

export const MenuContainer = styled.div``;

export const MenuTitle = styled.div``;
export const MenuList = styled.div``;
export const Menu = styled.div``;
export const MenuName = styled.p``;
