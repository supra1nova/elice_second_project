import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HalfLayout from './HalfLayout';
import { Home } from '../pages/Home';
import { MyPage } from '../pages/MyPage';

function Router() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' element={<Home />}></Route>
      </Route>
      <Route element={<HalfLayout />}>
        <Route path='/account/restaurants' element={<MyPage />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
