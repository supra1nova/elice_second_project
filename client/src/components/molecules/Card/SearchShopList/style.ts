import styled, { css } from 'styled-components';
// import LiKeBtn from '../../../atoms';

interface Props {
  large: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: Props) => (props.large ? '370px' : '193px')};
  height: ${(props: Props) => (props.large ? '326px' : '245px')};
  box-shadow: 5px 5px 3px #eaece5;
  border-radius: 10px;
`;

export const ImgWrapper = styled.div`
  width: ${(props: Props) => (props.large ? '370px' : '193px')};
  height: ${(props: Props) => (props.large ? '243px' : '193px')};
  position: relative;

  > button {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }
`;

// export const LikeBtn = styled(LikeBtn)``;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const Title = styled.div`
  ${(props) => props.theme.font.subtitle1}
  margin-top: ${(props: Props) => (props.large ? '10px' : '5px')};
  line-height: 23px;
  display: flex;
  align-items: center;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  span {
    position: absolute;
    right: 10px;
  }
  margin-bottom: ${(props: Props) => (props.large ? '5px' : '0')};
`;

export const SubTitle = styled.div`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  line-height: 17.38px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Caption = styled.div`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  align-items: center;
  display: ${(props: Props) => (props.large ? 'flex' : 'none')};

  svg:nth-child(1) {
    margin-right: 5px;
  }
  svg:nth-child(2) {
    margin: 0 5px 0 10px;
  }
`;
