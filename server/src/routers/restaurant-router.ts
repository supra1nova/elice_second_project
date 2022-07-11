// import is from '@sindresorhus/is';
import { Router, Request, Response, NextFunction } from 'express';
import { restaurantService } from '../services';
import { ownerRequired, loginRequired } from '../middlewares';
// // import { adminRequired } from '../middlewares/admin-required';

const restaurantRouter = Router();


// 1. 업체 생성
restaurantRouter.post('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const restaurantInfo:restaurantInfo = req.body
    const newRestaurant = await restaurantService.addRestaurant(restaurantInfo);
    res.status(201).json(newRestaurant);
  } catch (error) {
    next(error);
  }
});

// // 2. 업체 목록 조회 (배열 형태로 반환)
// restaurantRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
restaurantRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const page= Number(req.query.page) ||1;
    const perPage= Number(req.query.perPage) ||12;

    const [total, restaurants] = await Promise.all([
      await restaurantService.countRestaurants(),
      await restaurantService.getRangedRestaurants(page, perPage)
    ]);
    
    const totalPage = Math.ceil(total / perPage);
    
    // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
    res.status(200).json({ restaurants, page, perPage, totalPage, total });
  } catch (error) {
    next(error);
  }
})
// // 3. 업체 상세 정보 조회
// restaurantRouter.get('/:REGNumber', async function (req: Request, res:Response, next:NextFunction) {
//   try {
//     const { REGNumber } = req.params;
//     const restaurant = await restaurantService.findRestaurant(REGNumber);
//     res.status(200).json(restaurant);
//   } catch (error) {
//     next(error);
//   }
// });

// // 4. 업체 정보 업데이트
restaurantRouter.patch('/:REGNumber', loginRequired, ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
  try {
    
    const REGNumber = req.params.REGNumber;
    const updateRestaurantInfo:updateRestaurantInfo=req.body;
  
    const updatedRestaurantInfo = await restaurantService.setRestaurant(
      REGNumber,
      updateRestaurantInfo
    );
    res.status(200).json(updatedRestaurantInfo);    // 업데이트된 데이터를 프론트에 json 형태로 전달
  } catch (error) {
    next(error);
  }
});

// // 5. 음식점 정보 삭제
// restaurantRouter.delete('/', ownerRequired, async (req, res, next) => {

restaurantRouter.delete('/', async (req, res, next) => {
  try {
    //menu다 지워야 함
    //req.role 이 ADMIN이면 삭제 가능 or email 비교

    const { REGNumber,email } = req.body;
    const result = await restaurantService.removeRestaurant(REGNumber,email);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface restaurantInfo{
  REGNumber: string, 
  name:string,
  ownerEmail:string,
  address:{
    address1:string,
    address2:string,
    postalcode:number
  },
  phoneNumber?:string,
  image?:string
  category:string;
  description?:string;
}

export interface updateRestaurantInfo{
  name?:string,
  address?:{
    address1?:string,
    address2?:string,
    postalcode?:number
  },
  phoneNumber?:string,
  image?:string
  category?:string;
  description?:string;
}
export { restaurantRouter };
