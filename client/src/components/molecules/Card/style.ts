import styled, { css } from 'styled-components';

export const CardWrapperHorizon = styled.div`
  display: flex;
  border: 1px solid gray;
  width: 544px;
`;
export const CardWrapperVertical = styled.div`
  display: flex;
  flex-directoin: column;
`;

export const ImgWrapper = styled.div`
  min-width: 170px;
  height: 170px;
  background-color: black;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.theme.font.title2};
  line-height: 29px;
  > span {
    margin-left: 10px;
  }
  svg {
    margin-left: auto;
  }
`;

export const SubTitle = styled.h4`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font3};
  line-height: 17.38px;
`;

export const descriptionWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  svg {
    flex-shrink: 0;
  }
`;

export const Description = styled.p`
  ${(props) => props.theme.font.description2};
  color: ${(props) => props.theme.font.font1};
  line-height: 20px;
  padding-left: 10px;
`;

export const SeeDetails = styled.div`
  text-align: end;
  margin-top: 27px;
  ${(props) => props.theme.font.caption}
  color: ${(props) => props.theme.colors.font2}
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
