import { Router, Request, Response,NextFunction } from 'express';
import { loginRequired, ownerRequired } from '../middlewares';
import { ratingService } from '../services/rating-service';

const ratingRouter = Router();

// 1. 별점 생성(초깃값 세팅)
// ratingRouter.post('/create/users', loginRequired, async (req:Request, res:Response, next:NextFunction) => {
ratingRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const ratingInfo = req.body;
    const newRating = await ratingService.addRating(ratingInfo);
    res.status(201).json(newRating);
  }
  catch (error) {
    next(error);
  }
});

// 2. 특정 상호 별점 전체 조회 - 사업자 등록번호 기준
ratingRouter.get('/:REGNumber', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const REGNumber= req.params.REGNumber;
    const ratings = await ratingService.getRatingsByREGNumber(REGNumber);
    res.status(200).json(ratings);
  } catch (error) {
    next(error);
  }
});

// 5. 특정 상호 별점 삭제
// ratingRouter.delete('/', ownerRequired, async (req, res, next) => {
  ratingRouter.delete('/', async (req, res, next) => {
    try {
      //req.body.REGNumber가 나중에는 input이 되어야 한다.
      const REGNumber  = req.body.REGNumber;
      const result = await ratingService.removeRating(REGNumber);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  });  


export interface ratingInfo{
  REGNumber: string,
  Five?: number,
  Four?: number,
  Three?: number,
  Two?: number,
  One?: number
}

export { ratingRouter };
