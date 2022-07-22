import styled, { css } from 'styled-components';
// import LiKeBtn from '../../../atoms';

interface Props {
  large: boolean;
}

export const Container = styled.div`
  margin: 0 100px;
  padding-top: 50px;
`;

export const PageTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-row-gap: 30px;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 310px;
  box-shadow: 5px 5px 3px #eaece5;
  border-radius: 10px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 350px;
  height: 243px;
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
  margin-top: 10px;
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
  margin-bottom: 5px;
`;

export const SubTitle = styled.div`
  ${(props) => props.theme.font.caption};
  color: ${(props) => props.theme.colors.font2};
  line-height: 17.38px;
`;
