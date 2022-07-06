import { Router, Request, Response, NextFunction } from 'express';
// import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
// import { loginRequired } from '../middlewares';
// import { productService } from '../services';
// import { adminRequired } from '../middlewares/admin-required';

const userRouter = Router();

// 향후 로그인 required 추가시 대체 예정
// userRouter.get('/users', loginRequired, async function (req, res, next) {
userRouter.get('/', async function (req: Request, res:Response, next:NextFunction) {
  try {
    const users: string[] = await userService.getUsers();
    
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// userRouter.get('/', loginRequired, async function (req, res, next) {
userRouter.get('/', async function (req, res, next) {
  try {
    const user = await userService.getUser(currentUserId);
    const { email, password, nickName, phoneNumber, role, REGNumber, image } = user;
    const toSend = {
      ...(email && { email }),
      ...(password && { password }),
      ...(nickName && { nickName }),
      ...(phoneNumber && { phoneNumber }),
      ...(role && { role }),
      ...(REGNumber && { REGNumber }),
      ...(image && { image }),
    };

    res.status(200).json(toSend);
  } catch (error) {
    next(error);
  }
});




export { userRouter };
