// import is from '@sindresorhus/is';
import { Router, Request, Response, NextFunction } from 'express';
import { restaurantService, restaurantImageService } from '../services';
import { ownerRequired, loginRequired } from '../middlewares';
import { upload, s3 } from '../config/upload';
const DEFAULT_EXPRIE= 3600
import {client} from '../config/redis'
import { resolveModuleName } from 'typescript';


const restaurantRouter = Router();

// 1. 업체 생성
restaurantRouter.post(
  '/',
  loginRequired,
  ownerRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const restaurantInfo: restaurantInfo = req.body;
      restaurantInfo.ownerEmail = req.email;
      console.log(restaurantInfo.ownerEmail)
      const newRestaurant = await restaurantService.addRestaurant(
        restaurantInfo,
      );
      res.status(201).json(newRestaurant);
    } catch (error) {
      next(error);
    }
  },
);

// 2-1. 업체 목록 조회 (배열 형태로 반환)
restaurantRouter.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = Number(req.query.page) || 1;
      const perPage = Number(req.query.perPage) || 12;
      const criteria = String(req.query.criteria) || 'default';

      const [total, restaurants] = await Promise.all([
        await restaurantService.countRestaurants(),
        await restaurantService.getRangedRestaurants(criteria, page, perPage),
      ]);

      const totalPage = Math.ceil(total / perPage);

      // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
      res.status(200).json({ restaurants, page, perPage, totalPage, total });
    } catch (error) {
      next(error);
    }
  },
);

// 2-2. (이메일 이용 업체 조회 - 점주 고유 기능)
restaurantRouter.get(
  '/owner/',
  // loginRequired,
  // ownerRequired,
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.email;
      const restaurant = await restaurantService.getRestaurantByEmail(email);
      res.status(200).json(restaurant);
    } catch (error) {
      next(error);
    }
  },
);

// 3. 업체 상세 정보 조회
restaurantRouter.get(
  '/:REGNumber',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const { REGNumber } = req.params;
      let redisresult = await client.get(`restaurant?REGNumber=${REGNumber}`)
      if(redisresult!==null){
        console.log("CACHE HIT");
        res.status(200).json(JSON.parse(redisresult))
      }
      else{
        console.log("CACHE MISS");
          const restaurant = await restaurantService.getRestaurant(REGNumber);
          client.set(`restaurant?REGNumber=${REGNumber}`,JSON.stringify(restaurant),{
            EX: DEFAULT_EXPRIE
          });
          res.status(200).json(restaurant);
        }
    }catch (error) {
      next(error);
    }},
)


// 4. 업체 정보 업데이트
restaurantRouter.patch(
  '/:REGNumber',
  // loginRequired,
  // ownerRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const REGNumber = req.params.REGNumber;
      const updateRestaurantInfo: updateRestaurantInfo = req.body;

      const updatedRestaurantInfo = await restaurantService.setRestaurant(
        REGNumber,
        updateRestaurantInfo,
      );
      const restaurant = await restaurantService.getRestaurant(REGNumber);
      client.set(`restaurant?REGNumber=${REGNumber}`,JSON.stringify(restaurant),{
        EX: DEFAULT_EXPRIE
      });
      res.status(200).json(restaurant); // 업데이트된 데이터를 프론트에 json 형태로 전달
    } catch (error) {
      next(error);
    }
  },
);

// 5. 음식점 정보 삭제
restaurantRouter.delete(
  '/',
  // loginRequired,
  // ownerRequired,
  async (req, res, next) => {
    try {
      //menu다 지워야 함
      //req.role 이 ADMIN이면 삭제 가능 or email 비교
      const { REGNumber, email } = req.body;
      const result = await restaurantService.removeRestaurant(REGNumber, email);
      const categories = await restaurantImageService.getRestaurantImages(
        REGNumber,
      );
      for (let value of categories) {
        const result = await restaurantImageService.removeRestaurantImage(
          value.imageKey,
        );
        s3.deleteObject(
          {
            Bucket: 'matjip',
            Key: value.imageKey,
          },
          function (err, data) {},
        );
      }
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
);

export interface restaurantInfo {
  REGNumber: string;
  name: string;
  ownerEmail: string;
  address1: string;
  address2: string;
  postalcode: number;
  phoneNumber?: string;
  image?: string;
  category: string;
  wishers?: number;
  description?: string;
  average?: number;
}

export interface updateRestaurantInfo {
  name?: string;
  address1?: string;
  address2?: string;
  postalcode?: number;
  phoneNumber?: string;
  image?: string;
  category?: string;
  wishers?: number;
  description?: string;
  average?: number;
}
export { restaurantRouter };
