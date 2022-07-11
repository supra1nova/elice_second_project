import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HalfLayout from './HalfLayout';
import { Home } from '../pages/Home';
import AccountRestaurants from '../pages/Account/AccountRestaurants';
import AccountReserves from '../pages/Account/AccountReserves';
import AccountRestaurantsList from '../pages/Account/AccountRestaurantsList';
import Login from '../pages/Users/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/account/restaurants'
            element={<AccountRestaurants />}
          ></Route>
          <Route
            path='/account/reserves'
            element={<AccountReserves />}
          ></Route>
          <Route
            path='/account/restaurants/list'
            element={<AccountRestaurantsList />}
          ></Route>
        </Route>
        <Route element={<HalfLayout />}>
          <Route path='/users/login' element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
