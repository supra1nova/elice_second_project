import { PAGES } from './title';
import { URL } from './urls';

export const USERS = [
  { menu: PAGES.USER_SECURITY, to: URL.USERS_SECURITY },
  { menu: PAGES.USER_SIGNOUT, to: URL.USERS_SIGNOUT },
];

// 계정관리쪽은 user, admin, owner 구분해서 만들기

export const ACCOUNT = {
  USER: [{ menu: '', to: '' }],
  ADMIN: [{ menu: '', to: '' }],
  OWNER: [
    { menu: PAGES.ACCOUNT_RESTAURANTS_HOME, to: URL.ACCOUNT_RESTAURANTS_HOME },
    { menu: PAGES.ACCOUNT_RESTAURANTS, to: URL.ACCOUNT_RESTAURANTS },
    { menu: PAGES.ACCOUNT_RESERVES, to: URL.ACCOUNT_RESERVES },
    { menu: PAGES.ACCOUNT_MENUS, to: URL.ACCOUNT_MENUS },
    { menu: PAGES.USER_SECURITY, to: URL.USERS_SECURITY },
    { menu: PAGES.USER_SIGNOUT, to: URL.USERS_SIGNOUT },
  ],
};
