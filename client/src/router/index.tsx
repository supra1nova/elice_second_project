import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalLayout from './GlobalLayout';
import HalfLayout from './HalfLayout';
import Home from '../pages/Home';
import RestaurantHome from '../pages/Restaurant/RestaurantHome';
import Search from '../pages/Search';
import AccountBooking from '../pages/Account/AccountBooking';
import AccountRestaurants from '../pages/Account/AccountRestaurants';
import AccountReserves from '../pages/Account/AccountReserves';
import AccountManagement from '../pages/Account/AccountManagement';
import AccountCategories from '../pages/Account/AccountCategories';
import AccountLikes from '../pages/Account/AccountLikes';
import AccountMenus from '../pages/Account/AccountMenus';
import AccountUsers from '../pages/Account/AccountUsers';
import UsersLogin from '../pages/Users/UsersLogin';
import UsersRegister from '../pages/Users/UsersRegister';
import UsersSecurity from '../pages/Users/UsersSecurity';
import UsersSignout from '../pages/Users/UsersSignout';
import { URL } from '../constants/urls';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={URL.HOME} element={<Home />}></Route>
          <Route path={URL.RESTAURANTS} element={<RestaurantHome />}></Route>
          <Route path={URL.SEARCH} element={<Search />}></Route>
          <Route
            path={`${URL.ACCOUNT_RESTAURANTS}`}
            element={<AccountRestaurants />}
          ></Route>
          <Route
            path={URL.ACCOUNT_RESERVES}
            element={<AccountReserves />}
          ></Route>

          <Route
            path={URL.ACCOUNT_BOOKING}
            element={<AccountBooking />}
          ></Route>
          <Route
            path={URL.ACCOUNT_MANAGEMENT}
            element={<AccountManagement />}
          ></Route>

          <Route
            path={URL.ACCOUNT_CATEGORIES}
            element={<AccountCategories />}
          ></Route>
          <Route path={URL.ACCOUNT_LIKES} element={<AccountLikes />}></Route>
          <Route path={URL.ACCOUNT_USERS} element={<AccountUsers />}></Route>
          <Route path={URL.ACCOUNT_MENUS} element={<AccountMenus />}></Route>
          <Route
            path={`${URL.USERS_SECURITY}`}
            element={<UsersSecurity />}
          ></Route>
          <Route path={URL.USERS_SIGNOUT} element={<UsersSignout />}></Route>
        </Route>
        <Route element={<HalfLayout />}>
          <Route path={URL.USERS_LOGIN} element={<UsersLogin />}></Route>
          <Route path={URL.USERS_REGISTER} element={<UsersRegister />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
