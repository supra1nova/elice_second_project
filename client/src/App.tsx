import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyPage } from './pages/MyPage';

//fetch test
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
