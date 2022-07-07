import is from '@sindresorhus/is';
import { Router, Request, Response, NextFunction } from 'express';
import { loginRequired } from 'src/middlewares';
// import { productService } from '../services';
// import { adminRequired } from '../middlewares/admin-required';

const userRouter = Router();

// 1-2. 일반 사용자 등록
userRouter.post('/register', async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }
    const { name, email, password } = req.body;
    const newUser = await userService.addUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});
  
// 2. 사용자 목록 조회
userRouter.get('/', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
  try {
    const users: string[] = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// 3. 사용자 상세 조회
userRouter.get('/user', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
  try {
    const user = await userService.findUser(req.currentUserEmail);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// 4. 사용자 정보 수정
userRouter.patch('/user', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }

    const email = req.currentUserEmail;

    const name = req.body.name;
    const password = req.body.password;
    const nickName = req.body.nickName;
    const phoneNumber = req.body.phoneNumber;
    const role = req.body.role;
    const currentPassword = req.body.currentPassword;

    // currentPassword 없을 시, 진행 불가
    if (!currentPassword) {
      throw new Error('정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }

    const userInfoRequired = { email, currentPassword };

    const toUpdate = {
      ...(name && { name }),
      ...(password && { password }),
      ...(nickName && { nickName }),
      ...(phoneNumber && { phoneNumber: phoneNumber }),
      ...(role && { role }),
    };

    // 사용자 정보를 업데이트.
    await userService.setUser( userInfoRequired, toUpdate );
    
    if (password) {
      const userToken = await userService.getUserToken({ email, password });
      res.status(200).json(userToken);
    } else{
      const userToken = await userService.getUserToken({ email, password: currentPassword });
      res.status(200).json(userToken);
    }
  } catch (error) {
    next(error);
  }
});

// 5. 사용자 삭제
userRouter.delete('/user', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
  try {
    const email = req.currentUserEmail;
    const { currentPassword } = req.body;
    const result = await userService.removeUser({ email, currentPassword });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

// 6. 로그인 구현
userRouter.post('/login', async function (req: Request, res:Response, next:NextFunction) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }
    const email = req.body.email;
    const password = req.body.password;
    const userToken = await userService.getUserToken({ email, password });
    res.status(200).json(userToken);
  } catch (error) {
    next(error);
  }
});




export { userRouter };
