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
  width: 120px;
  img {
    width: 100%;
  }
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
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const UserInfoWrapper = styled.div`
  margin-top: 20px;
`;

export const Greetings = styled.div`
  ${(props) => props.theme.font.subtitle2}
  font-size: 18px;
`;

export const UserInfo = styled.div`
  ${(props) => props.theme.font.caption}
  font-size: 14px;
  margin-top: 4px;
`;

export const MenuContainer = styled.div`
  color: ${(props) => props.theme.colors.font2};
  margin-top: 40px;

  a,
  button {
    color: ${(props) => props.theme.colors.font2};
  }
`;

export const MenuTitle = styled.div`
  ${(props) => props.theme.font.captionBold}
  padding-left: 20px;
`;
export const MenuList = styled.div`
  margin-top: 10px;

  + a {
    margin-top: 10px;
    background-color: black;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 193px;
  height: 36px;
  padding: 10px 20px;

  border-radius: 50px;
  margin-top: 5px;

  svg {
    margin-right: 8px;
  }

  :hover {
    background-color: white;
    color: #64ad57;

    svg path {
      fill: #64ad57;
    }
  }
`;
export const MenuName = styled.p`
  font-size: 14px;
`;
