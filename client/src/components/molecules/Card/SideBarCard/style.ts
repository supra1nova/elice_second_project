import styled, { css } from 'styled-components';
// import LiKeBtn from '../../../atoms';

interface Props {
  review: boolean;
}

// 나중에 리스트를 감싸는 컨테이너로 패딩처리하는 게 좋을 것 같음( width : 100% )
export const Container = styled.div`
  display: flex;
  width: ${(props: Props) => (props.review ? '310px' : '193px')};
  height: ${(props: Props) => (props.review ? '120px' : '49px')};
  border: 1px solid black;
  padding: 10px;
  padding-top: ${(props: Props) => (props.review ? '10px' : '8px')};
  padding-bottom: ${(props: Props) => (props.review ? '10px' : '8px')};
`;

export const ImgWrapper = styled.div`
  width: ${(props: Props) => (props.review ? '39px' : '33px')};
  height: ${(props: Props) => (props.review ? '39px' : '33px')};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.div`
  ${(props) => props.theme.font.description2};
  display: flex;
  align-items: flex-end;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.theme.font.captionBold};

  span {
    margin-left: 6px;
  }

  h4 {
    margin-left: auto;
  }
`;

export const Caption = styled.h4`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font3};
  display: flex;
  align-items: center;
  margin-top: auto;
  line-height: 17px;
  svg {
    margin-right: 4px;
  }
`;
