import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
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
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.theme.font.title2};
  line-height: 29px;

  > span {
    margin-left: 10px;
  }
  button {
    margin-left: auto;
    display: flex;
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
  color: ${(props) => props.theme.colors.font1};
  line-height: 20px;
  padding: 0 10px;
  width: 100%;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SeeDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  margin-bottom: 5px;
  margin-right: 5px;
  ${(props) => props.theme.font.caption}
  color: ${(props) => props.theme.colors.font2}
`;
