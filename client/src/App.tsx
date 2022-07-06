<<<<<<< HEAD
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyPage } from './pages/MyPage';
=======
import React from "react";
>>>>>>> 15b8564e6cb7b8ef874f1ae34951aea24f98778d

//fetch test
function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
      </Routes>
=======
    <div className="App">
      <button
        onClick={() => {
          fetch("/api/customers")
            .then((res) => res.json())
            .then((data) => console.log(data));
        }}
      >
        Get data
      </button>
>>>>>>> 15b8564e6cb7b8ef874f1ae34951aea24f98778d
    </div>
  );
}

export default App;
