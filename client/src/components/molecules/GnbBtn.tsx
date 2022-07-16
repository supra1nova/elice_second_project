import styled from 'styled-components';
import { isPropertyAssignment } from 'typescript';

const BtnMenu = styled.button`
  padding: 10px 24px;
  background-color: ${(props) =>
    props.name === 'register' ? '#64AD57' : 'white'};
  border: ${(props) => (props.name === 'register' ? 'none' : '#64AD57')};
  color: ${(props) => (props.name === 'register' ? 'white' : '#64AD57')};
  border-radius: 5px;
  margin-top: ${(props) => (props.name === 'register' ? '20px' : '10px')};
`;

const Description = styled.p``;

export const GnbForNotUser = () => {
  return (
    <>
      <Description>
        회원가입 후 TEAM 3와 함께
        <br /> 근사한 식사를 준비해보세요!
      </Description>
      <BtnMenu name='register'>회원가입</BtnMenu>
      <BtnMenu name='login'>로그인</BtnMenu>
    </>
  );
};
