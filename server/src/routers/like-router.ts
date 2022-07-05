import { Router, Request, Response,NextFunction } from 'express';
// import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
// import { loginRequired } from '../middlewares';
// import { productService } from '../services';
// import { adminRequired } from '../middlewares/admin-required';

const likeRouter = Router();

// 주문 api (아래는 /register이지만, 실제로는 /product/order 요청해야 함.)
// orderList, email, address, phonenumber등을 받음

likeRouter.get('/all', async (req: Request, res:Response, next:NextFunction) => {
  try {

    const {eamil} = req.body
    // const products = await productService.getAllProduct();

    //@ts-ignore

    res.status(201).json(products);
  } catch (error) {
    next(error);
  }
});


export { likeRouter };
