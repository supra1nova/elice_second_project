import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GnbForNotUser } from '../molecules/GnbBtn';

const Container = styled.section`
  width: 233px;
  height: 100vh;
  padding: 17px 30px 17px 20px;
  position: fixed;
  background-color: #f4f6f3;
`;

const Title = styled.h3``;

const Description = styled.p``;

export const Gnb = () => {
  return (
    <Container>
      <Title>TEAM 3</Title>
      <GnbForNotUser></GnbForNotUser>
    </Container>
  );
};
