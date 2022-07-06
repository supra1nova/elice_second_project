import { Link } from 'react-router-dom';
import { Gnb } from '../components/oranisms/Gnb';
import styled from 'styled-components';

const Container = styled.section`
  margin-left: 233px;
  height: 100vh;
`;

export const Home = () => {
  return (
    <>
      <Gnb />
      <Container>
        <h1>
          Hello World! <br></br>This is Home section
        </h1>
      </Container>
    </>
  );
};
