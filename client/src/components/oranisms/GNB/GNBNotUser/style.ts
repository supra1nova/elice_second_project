import styled from 'styled-components';

export const BtnMenu = styled.button`
  padding: 10px 24px;
  background-color: ${(props) =>
    props.name === 'register' ? '#64AD57' : 'white'};
  border: ${(props) =>
    props.name === 'register' ? 'none' : '1px solid #64AD57'};
  border-radius: 20px;
  margin-top: ${(props) => (props.name === 'register' ? '20px' : '10px')};
  height: 40px;
  width: 100%;
  color: ${(props) => (props.name === 'register' ? 'white' : '#64AD57')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  ${(props) => props.theme.font.description2};
  color: ${(props) => props.theme.colors.font1};
  line-height: 18px;
  letter-spacing: normal;
  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
