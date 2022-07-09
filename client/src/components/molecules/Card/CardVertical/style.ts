import styled, { css } from 'styled-components';
// import LiKeBtn from '../../../atoms';

interface Props {
  large: boolean;
}

export const CardWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: Props) => (props.large ? '396px' : '193px')};
  height: ${(props: Props) => (props.large ? '326px' : '245px')};
  border: 1px solid black;
`;

export const ImgWrapper = styled.div`
  width: ${(props: Props) => (props.large ? '396px' : '193px')};
  height: ${(props: Props) => (props.large ? '243px' : '193px')};
  position: relative;

  > button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

// export const LikeBtn = styled(LikeBtn)``;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  ${(props) => props.theme.font.subtitle1}
  margin-top: 10px;
  line-height: 23px;
  display: flex;
  align-items: center;
  span {
    margin-left: auto;
  }
  margin-bottom: ${(props: Props) => (props.large ? '5px' : '0')};
`;

export const SubTitle = styled.h4`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  line-height: 17.38px;
`;

export const Caption = styled.h4`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  display: flex;
  align-items: center;

  svg:nth-child(1) {
    margin-right: 5px;
  }
  svg:nth-child(2) {
    margin: 0 5px 0 10px;
  }
`;
