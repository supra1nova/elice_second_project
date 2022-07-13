import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const Container = styled.div`
  height: 270px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
  border: 1px solid #e5e5e5;
  padding: 20px 72px;
  z-index: 99;
  position: absolute;
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
export const LocationWrapper = styled.div`
  width: 763px;
  height: 80%;
  display: flex;
  align-items: center;
  overflow: auto;
  /* button:not(:first-of-type) {
    margin-left: 5px;
  }

  button:last-of-type {
    margin-left: auto;
  } */
`;

export const Address1Wrapper = styled.div`
  width: 100px;
  display: block;
  background-color: gray;
`;

export const ButtonWrapper = styled.button`
  text-align: center;
  justify-self: flex-start;
  width: 100%;
  height: 37px;
  ${(props: Props) =>
    props.active
      ? 'background-color : #64AD57; color: white; '
      : 'background-color: white;border: 1px solid #E5E5E5;'}
`;

export const Address2Wrapper = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const TimeSelectButton = styled.button`
  min-width: 92px;
  height: 36px;
  border-radius: 5px;
`;

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme.colors.line};
  width: 763px;
  margin: 10px 0;
`;
