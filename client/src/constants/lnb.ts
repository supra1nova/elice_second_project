import { PAGES } from './title';
import { URL } from './urls';

const REGNumber = window.location.href.split('/')[5];

export const USERS = [
  { menu: PAGES.USER_SECURITY, to: URL.USERS_SECURITY },
  { menu: PAGES.USER_SIGNOUT, to: URL.USERS_SIGNOUT },
];

// 계정관리쪽은 user, admin, owner 구분해서 만들기

export const ACCOUNT = {
  USER: [{ menu: '', to: '' }],
  ADMIN: [{ menu: '', to: '' }],
  OWNER: [
    {
      menu: PAGES.ACCOUNT_RESTAURANTS_HOME,
      to: `${URL.ACCOUNT_RESTAURANTS}/:REGNumber`,
    },
    { menu: PAGES.ACCOUNT_RESTAURANTS, to: URL.ACCOUNT_RESTAURANTS },
    { menu: PAGES.ACCOUNT_RESERVES, to: URL.ACCOUNT_RESERVES },
    {
      menu: PAGES.ACCOUNT_RESERVES_MANAGEMENT,
      to: URL.ACCOUNT_RESERVES_MANAGEMENT,
    },
    { menu: PAGES.ACCOUNT_MENUS, to: URL.ACCOUNT_MENUS },
  ],
};
