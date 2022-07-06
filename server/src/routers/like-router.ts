import { Router, Request, Response,NextFunction } from 'express';
// import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
// import { loginRequired } from '../middlewares';
// import { productService } from '../services';
// import { adminRequired } from '../middlewares/admin-required';

const likeRouter = Router();

// 1. 찜 생성
likeRouter.post('/create', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const { REGNumber, name, category, address1, address2, postalNumber, phoneNumber, image } = req.body
    const newRestaurant = await restaurantService.addRestaurant({ REGNumber, name, category, address1, address2, postalNumber, phoneNumber, image });
    res.status(201).json(newRestaurant);
  } catch (error) {
    next(error);
  }
});

// 2. 찜 목록 조회
likeRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    // res.status(201).json('');
    res.status(201).send('GET - This is from likeRouter');
  } catch (error) {
    next(error);
  }
});

// 2. 찜 목록 조회
likeRouter.put('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    // res.status(201).json('');
    res.status(201).send('PUT - This is from likeRouter');
  } catch (error) {
    next(error);
  }
});

// 4. 찜 삭제 조회
likeRouter.delete('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    // res.status(201).json('');
    res.status(201).send('DELETE - This is from likeRouter');
  } catch (error) {
    next(error);
  }
});



export { likeRouter };
