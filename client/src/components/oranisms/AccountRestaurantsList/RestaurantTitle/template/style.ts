import styled, { css } from 'styled-components';

interface TimeProps {
    active: boolean;
}

export const FormContainer = styled.form`
    width: 387px;
    border-top: 1px solid ${(props) => props.theme.colors.line};
    padding: 20px 0 0;
    color: ${(props) => props.theme.colors.font1};
    ${(props) => props.theme.font.subtitle1}
`;

export const TimeWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
`;

export const TimeSelectButton = styled.button`
    min-width: 92px;
    height: 36px;
    border-radius: 5px;
    ${(props) => props.theme.font.description2}
    ${(props: TimeProps) =>
    props.active
        ? 'background-color : #64AD57; color: white; '
        : 'background-color: white; border: 1px solid #E5E5E5; color: #83867E'}
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  ${(props) => props.theme.font.description1}

  button:first-of-type {
    margin-right: 14px;
  }

  button:last-of-type {
    margin-left: 14px;
  }
`;

export const ButtonWrapper = styled.button`
  width: 24px;
  height: 24px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  width: 100%;
  margin: 20px 0;
`;

export const FormName = styled.div`
  margin-left: 10px;
`

export const FormCategory = styled.div`
  display: flex;
  align-items: center;
`

export const TimeLegend = styled.div`
  display: flex;
  ${(props) => props.theme.font.caption}
  justify-content: end;
  align-items: center;
  color: ${(props) => props.theme.colors.font3};

  span {
    margin-left: 5px;
  }
`

export const Box = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 10px;
`

export const SelectBox = styled(Box)`
  background-color: ${(props) => props.theme.colors.main1};
`
export const NoneBox = styled(Box)`
  background-color: ${(props) => props.theme.colors.line};
`

export const BookerInfo = styled.div`
  padding: 10px 0 0;
  ${(props) => props.theme.font.caption}

  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  div:last-child {
    align-items: flex-start;
  }

  div > span {
    width: 55px;
  }
`