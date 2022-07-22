import { Router, Request, Response, NextFunction } from 'express';
import { wishService } from '../services';
import { loginRequired } from '../middlewares';

const wishRouter = Router();

// 1. 찜 생성 - 사용자 찜 추가(return 값으로 찜한 전체 인원수 반환)
wishRouter.post(
  '/',
  loginRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, REGNumber } = req.body;
      const result = await wishService.addWish(email, REGNumber);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  },
);

// 2-1. 사용자 이메일 기준 찜 목록 조회
wishRouter.get(
  '/:email',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.params.email;
      // const criteria = String(req.query.criteria) || 'default';
      const wishes = await wishService.getWishesByEmail(email);
      // const restaurants = await wishService.getWishesByEmail(criteria, email);
      res.status(200).json(wishes);
    } catch (error) {
      next(error);
    }
  },
);

// 2-2. 특정 상호 관련 찜한 손님 전체 조회 - 상호 기준
wishRouter.get(
  '/total/:REGNumber',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const REGNumber = req.params.REGNumber;
      const wishes = await wishService.getWishesByREGNumber(REGNumber);
      const wishNumber = wishes.length;
      res.status(200).json(wishNumber);
    } catch (error) {
      next(error);
    }
  },
);

// 3. 이메일, REGNumber 기준 찜 삭제
wishRouter.delete('/', loginRequired, async (req, res, next) => {
  try {
    //req.email이 나중에는 input이 되어야 한다.
    const { email, REGNumber } = req.body;
    const wishersNumber = await wishService.removeWish(email, REGNumber);
    res.status(200).json(wishersNumber);
  } catch (error) {
    next(error);
  }
});

export interface wishInfo {
  email: string;
  REGNumber: string;
}
export { wishRouter };
