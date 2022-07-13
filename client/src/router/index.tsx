import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HalfLayout from './HalfLayout';
import { Home } from '../pages/Home';
import AccountRestaurants from '../pages/Account/AccountRestaurants';
import AccountReserves from '../pages/Account/AccountReserves';
import AccountRestaurantsList from '../pages/Account/AccountRestaurantsList';
import UsersLogin from '../pages/Users/UsersLogin';
import UsersRegister from '../pages/Users/UsersRegister';
import UsersSecurity from '../pages/Users/UsersSecurity';
import UsersSignout from '../pages/Users/UsersSignout';

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
          <Route path='/account/reserves' element={<AccountReserves />}></Route>
          <Route
            path='/account/restaurants/:REGNumber'
            element={<AccountRestaurantsList />}
          ></Route>
        </Route>
        <Route element={<HalfLayout />}>
          <Route path='/users/login' element={<UsersLogin />}></Route>
          <Route path='/users/register' element={<UsersRegister />}></Route>
          <Route path='/users/security' element={<UsersSecurity />}></Route>
          <Route path='/users/signout' element={<UsersSignout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
