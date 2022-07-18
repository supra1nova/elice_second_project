import styled, { css } from 'styled-components';

interface TimeProps {
    active: boolean;
}

export const FormContainer = styled.form`
    width: 387px;
    border-top: 1px solid ${(props) => props.theme.colors.line};
    padding: 20px 0 0;
`;

export const TimeWrapper = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const TimeSelectButton = styled.button`
    min-width: 92px;
    height: 36px;
    border-radius: 5px;
    ${(props: TimeProps) =>
    props.active
        ? 'background-color : #64AD57; color: white; '
        : 'background-color: white;border: 1px solid #E5E5E5;'}
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