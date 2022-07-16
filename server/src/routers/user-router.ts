// import is from '@sindresorhus/is';
import { Router, Request, Response, NextFunction } from 'express';
import { loginRequired } from '../middlewares';
// import { loginRequired } from 'src/middlewares';
// import { updateLanguageServiceSourceFile } from 'typescript';
import { userService } from '../services/user-service';
import {upload,s3} from "../config/upload"

// import { adminRequired } from '../middlewares/admin-required';

const userRouter = Router();

// 1-2. 일반 사용자 등록
userRouter.post('/register', upload.single('image'),async (req:Request, res:Response, next:NextFunction) => {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     'headers의 Content-Type을 application/json으로 설정해주세요'
    //   );
    // }

      let userInfo:userInfo= req.body
      if(req.file==undefined) throw new Error("file not retrieved");
      userInfo.image=(req.file as any).location;
      userInfo.imageKey=(req.file as any).key;

      const newUser = await userService.addUser(userInfo);
      res.status(201).json(newUser);
    }
  catch (error) {
    next(error);
  }
});

  

// 6. 로그인 구현
userRouter.post('/login', async function (req: Request, res:Response, next:NextFunction) {
  try {
    // if (is.emptyObject(req.body)) {
    //   throw new Error(
    //     'headers의 Content-Type을 application/json으로 설정해주세요'
    //   );
    // }
    // const email = req.body.email;
    // const password = req.body.password;
    let loginInfo:userInfo=req.body;
    const userToken = await userService.getUserToken(loginInfo);
    res.status(200).json(userToken);
  } catch (error) {
    next(error);
  }
});

userRouter.get('/user', loginRequired, async (req, res, next) => {
  try {
    const email = req.email;
    if(email==undefined) throw new Error("email doesn't exist");
    const getUserInfo = await userService.getUserByEmail(email);
    res.status(200).json(getUserInfo);
  } catch (error) {
    next(error);
  }
});

// 2. 페이지네이션 된 유저 리스트 조회 - 페이지네이션 적용
userRouter.get('/', async function (req, res, next) {
  try {

    // url 쿼리로부터 page 값 수신, 부재시 기본값 1
    const page = Number(req.query.page) || 1;
    // url 쿼리로부터 perRage 값 수신, 부재시 기본값 12
    const perPage = Number(req.query.perPage) || 12;
    
    // total(전체 제품수), posts(현재 페이지에 있는 제품 정보) 를 Promise.all 을 사용해 동시에 호출
    const [total, posts] = await Promise.all([
      await userService.countUsers(),
      await userService.getRangedUsers(page, perPage)
    ]);
    
    const totalPage = Math.ceil(total / perPage);
    
    // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
    res.status(200).json({ posts, page, perPage, totalPage, total });
  } catch (error) {
    next(error);
  }
});

// // 3. 사용자 상세 조회
userRouter.get('/user/:email', async function (req: Request, res:Response, next:NextFunction) {
  try {
    const user = await userService.findUser(req.params.email);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// // 4. 사용자 정보 수정
// userRouter.patch('/', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
// userRouter.patch('/', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
userRouter.patch('/', async function (req: Request, res:Response, next:NextFunction) {
  try {

    const updateUserInfo:updateUserInfo=req.body;
    const {currentPassword, userInfo} =updateUserInfo;
    const {email}= userInfo;

    // currentPassword 없을 시, 진행 불가
    if (!currentPassword) {
      throw new Error('정보를 변경하려면, 현재의 비밀번호가 필요합니다.');
    }
    

    // 사용자 정보를 업데이트.
    if(email==undefined) throw new Error("Email was not given");

    const updatedUser = await userService.setUser(currentPassword, userInfo );
    res.status(200).json(updatedUser);
    }
  catch (error) {
    next(error);
  }
});

// 5. 사용자 삭제
userRouter.delete('/', loginRequired, async function (req: Request, res:Response, next:NextFunction) {
  try {
    const userInfo:userInfo= req.body;
    const {email}= userInfo;
    if(email==undefined) throw new Error("user not found");
    const user = await userService.findUser(email);
    if(user==undefined) throw new Error("user not found");
    
    s3.deleteObject({
      Bucket: 'matjip',
      Key: user.imageKey
    },function(err,data){});

    const result = await userService.removeUser(userInfo);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});


export interface userInfo{
  email?: string, 
  name?:string,
  password?:string,
  nickName?:string,
  phoneNumber?:string,
  role?:string,
  image?:string,
  imageKey?:string,
  wishList?:string[],
}
export interface updateUserInfo {
  userInfo:userInfo,
  currentPassword:string
}

export { userRouter };
