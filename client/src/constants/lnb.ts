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
  OWNER: [{ menu: '', to: '' }],
};
