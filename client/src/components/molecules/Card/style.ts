import styled from 'styled-components';

//css 의 :root 처럼 모든 파일에 전역으로 변수설정을 할 수 있는 방법 찾아볼 것
// global-style.ts 이용해야 할듯?

export const CardWrapperHorizon = styled.div`
  display: flex;
`;
export const CardWrapperVertical = styled.div`
  display: flex;
  flex-directoin: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding-left: 20px;
`;

export const Title = styled.h3`
  ${(props) => props.theme.font.title1};
`;

export const Grade = styled.h3`
  font-size: 20px;
  color: #64ad57;
`;

export const SubTitle = styled.h4`
  ${(props) => props.theme.font.title2}
  color: ${(props) => props.theme.colors.font2}
`;

export const Description = styled.p`
  font-size: 14px;
`;
//이미지 너비 높이는 props로 받아야 할까
export const Img = styled.img`
  min-width: 170px;
  height: 170px;
`;
// 좋아요 수, 리뷰 수에 들어가는 아이콘
// 이미지 위 하트
export const UseCount = styled.i`
    none;
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 20px 0;
`;
