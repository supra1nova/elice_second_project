import { Router, Request, Response,NextFunction } from 'express';
import { ownerRequired } from 'src/middlewares';
// import is from '@sindresorhus/is';
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
// import { loginRequired } from '../middlewares';
// import { productService } from '../services';
// import { adminRequired } from '../middlewares/admin-required';
// import { Router, Request, Response,NextFunction } from 'express';
// // import is from '@sindresorhus/is';
// // 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
// // import { loginRequired } from '../middlewares';
// // import { productService } from '../services';
// // import { adminRequired } from '../middlewares/admin-required';

const menuRouter = Router();

// // 1. 메뉴 생성
// menuRouter.post('/create', async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const { menuId, REGNumber, name, price, description, image } = req.body
//     // const newMenu = await menuService.addMenu({ menuId, REGNumber, name, price, description, image });
//     // res.status(201).json(newMenu);
//   } catch (error) {
//     next(error);
//   }
// });

// 2. 메뉴 목록 조회 (배열 형태로 반환)
menuRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const restaurants = await menuService.getUsers();
    res.status(200).json(restaurants);
  } catch (error) {
    next(error);
  }
});
// // 2. 메뉴 목록 조회 (배열 형태로 반환)
// menuRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const restaurants = await menuService.getUsers();
//     res.status(200).json(restaurants);
//   } catch (error) {
//     next(error);
//   }
// });

// // 3. 메뉴 상세 정보 조회
// menuRouter.get('/:menuId', async function (req: Request, res:Response, next:NextFunction) {
//   try {
//     const { menuId } = req.params;
//     const restaurant = await menuService.findRestaurant(menuId);
//     res.status(200).json(restaurant);
//   } catch (error) {
//     next(error);
//   }
// });

// 4. 메뉴 정보 업데이트
menuRouter.patch('/:menuId', ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요'
      );
    }
    const menuId = req.params.menuId;
    const { name, REGNumber, price, description, postalNumber, phoneNumber, image } = req.body;    // req.body 로부터 업데이트할 정보 추출
    const toUpdate = {    // 업데이트할 정보가 있다면, 업데이트용 객체에 삽입
      ...(name && { name }),
      ...(REGNumber && { REGNumber }),
      ...(price && { price }),
      ...(description && { description }),
      ...(postalNumber && { postalNumber }),
      ...(phoneNumber && { phoneNumber }),  // postalCode가 더 나을 것으로 보이는데 확인필요
      ...(image && { image }),
    };
    const updatedRestaurantInfo = await menuService.setRestaurant(
      menuId,
      toUpdate
    );
    res.status(200).json(updatedRestaurantInfo);    // 업데이트된 데이터를 프론트에 json 형태로 전달
  } catch (error) {
    next(error);
  }
});
// // 4. 메뉴 정보 업데이트
// menuRouter.patch('/:menuId', loginRequired, ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     if (is.emptyObject(req.body)) {
//       throw new Error(
//         'headers의 Content-Type을 application/json으로 설정해주세요'
//       );
//     }
//     const menuId = req.params.menuId;
//     const { name, REGNumber, price, description, postalNumber, phoneNumber, image } = req.body;    // req.body 로부터 업데이트할 정보 추출
//     const toUpdate = {    // 업데이트할 정보가 있다면, 업데이트용 객체에 삽입
//       ...(name && { name }),
//       ...(REGNumber && { REGNumber }),
//       ...(price && { price }),
//       ...(description && { description }),
//       ...(postalNumber && { postalNumber }),
//       ...(phoneNumber && { phoneNumber }),  // postalCode가 더 나을 것으로 보이는데 확인필요
//       ...(image && { image }),
//     };
//     const updatedRestaurantInfo = await menuService.setRestaurant(
//       menuId,
//       toUpdate
//     );
//     res.status(200).json(updatedRestaurantInfo);    // 업데이트된 데이터를 프론트에 json 형태로 전달
//   } catch (error) {
//     next(error);
//   }
// });

// // 5. 음식점 정보 삭제
// menuRouter.delete('/:menuId', ownerRequired, async (req, res, next) => {
//   try {
//     const { menuId } = req.params;
//     const result = await menuService.removeRestaurant(menuId);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });


// export { menuRouter };
