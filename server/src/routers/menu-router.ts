import { Router, Request, Response, NextFunction } from 'express';
import { menuService } from '../services';
import { ownerRequired } from '../middlewares';
import { loginRequired } from '../middlewares';
import { upload, s3 } from '../config/upload';
const menuRouter = Router();

// 1. 메뉴 생성
menuRouter.post(
  '/',
  // loginRequired,
  // ownerRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const menuInfo: menuInfo = req.body;
      menuInfo.price = menuInfo.price ? menuInfo.price : 0;
      const newMenu = await menuService.addMenu(menuInfo);
      res.status(201).json(newMenu);
    } catch (error) {
      next(error);
    }
  },
);

// 2. 특정 상호 관련 전체 메뉴 목록 조회 (배열 형태로 반환)
menuRouter.get(
  '/:REGNumber',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const REGNumber = req.params.REGNumber;
      const menus = await menuService.getMenus(REGNumber);
      res.status(200).json(menus);
    } catch (error) {
      next(error);
    }
  },
);

// 3. 메뉴 상세 정보 조회
menuRouter.get(
  '/menu/:menuId',
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const menuId = Number(req.params.menuId);
      const menu = await menuService.getMenu(menuId);
      res.status(200).json(menu);
    } catch (error) {
      next(error);
    }
  },
);

// 4-1. 메뉴 정보 업데이트
menuRouter.patch(
  '/:menuId',
  // loginRequired,
  // ownerRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //REGNuber가 request에 있어서는 안된다. REGNumber은 수정가능한 값이 아니기떄문에
      const menuId = Number(req.params.menuId);
      const menuInfo: menuInfo = req.body;
      const updatedMenuInfo = await menuService.setMenu(menuId, menuInfo);
      res.status(200).json(updatedMenuInfo); // 업데이트된 데이터를 프론트에 json 형태로 전달
    } catch (error) {
      next(error);
    }
  },
);

// 4-2. 사진 업데이트
menuRouter.patch(
  '/image/:menuId',
  upload.single('image'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //REGNuber가 request에 있어서는 안된다. REGNumber은 수정가능한 값이 아니기떄문에
      const menuId = Number(req.params.menuId);
      if (req.file == undefined) throw new Error('file not given');
      const menuInfo: menuInfo = {
        image: (req.file as any).location,
        imageKey: (req.file as any).key,
      };
      const updatedMenuInfo = await menuService.setMenu(menuId, menuInfo);
      res.status(200).json(updatedMenuInfo); // 업데이트된 데이터를 프론트에 json 형태로 전달
    } catch (error) {
      next(error);
    }
  },
);

// 5. 메뉴 정보 삭제
menuRouter.delete('/', loginRequired, ownerRequired, async (req, res, next) => {
  try {
    //req.email이 나중에는 input이 되어야 한다.
    const { menuId, email } = req.body;
    const menu = await menuService.getMenu(menuId);

    s3.deleteObject(
      {
        Bucket: 'matjip',
        Key: menu.imageKey,
      },
      function (err, data) {},
    );

    const result = await menuService.removeMenu(menuId, email);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface menuInfo {
  menuId?: number;
  REGNumber?: string;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  imageKey?: string;
}
export { menuRouter };
