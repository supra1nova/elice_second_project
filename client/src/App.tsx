import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyPage } from './pages/MyPage';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global-style';

const Container = styled.div`
  display: flex;

`;

//fetch test
function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
