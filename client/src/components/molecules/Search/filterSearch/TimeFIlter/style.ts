import styled from 'styled-components';

interface TimeProps {
  active: boolean;
}

export const Container = styled.div`
  height: 270px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  padding: 20px 72px;
`;

export const Title = styled.div`
  width: 763px;
  ${(props) => props.theme.font.description1}
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    min-width: 16px;
  }
  button {
    margin-left: auto;
  }
`;

export const ButtonWrapper = styled.button`
  width: 24px;
  height: 24px;
`;

export const TimeWrapper = styled.div`
  width: 763px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  button:not(:first-of-type) {
    margin-left: 5px;
  }

  button:last-of-type {
    margin-left: auto;
  }
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

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme.colors.line};
  width: 763px;
  margin: 20px 0;
`;
