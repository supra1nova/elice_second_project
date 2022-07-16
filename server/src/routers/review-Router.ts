import { Router, Request, Response,NextFunction } from 'express';
import { reviewService } from '../services/review-service';
import { ratingService } from '../services/rating-service';
import { loginRequired, ownerRequired } from '../middlewares';

const reviewRouter = Router();

// 1-1. 유저 리뷰 생성
// reviewRouter.post('/create/users', loginRequired, async (req:Request, res:Response, next:NextFunction) => {
reviewRouter.post('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reviewInfo = req.body;
    const newReview = await reviewService.addReview(reviewInfo);
    res.status(201).json(newReview);
    }
  catch (error) {
    next(error);
  }
});

// 1-2. 업주 리뷰 생성
// reviewRouter.post('/create/owners', ownerRequired, async (req:Request, res:Response, next:NextFunction) => {
reviewRouter.post('/owner', async (req: Request, res: Response, next: NextFunction) => {
  try {
    // let reviewInfo:reviewInfo= req.body
    const { reserveId, ownerComment }= req.body
    const newReview = await reviewService.addOwnerReview(reserveId, ownerComment);
    res.status(201).json(newReview);
  }
  catch (error) {
    next(error);
  }
});

// 2-1. 사업자번호별 리뷰 목록 조회 (배열 형태로 반환)
  reviewRouter.get('/:REGNumber', async (req: Request, res:Response, next:NextFunction) => {
    try {
      const { REGNumber } = req.params
      const page = Number(req.query.page) || 1;
      const perPage= Number(req.query.perPage) ||12;
  
      const [total, reviews] = await Promise.all([
        reviewService.countReviewsByREGNumber(REGNumber),
        await reviewService.getRangedReviewsByREGNumber(REGNumber, page, perPage)
      ]);
      const totalPage = Math.ceil(total / perPage);
      // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
      res.status(200).json({ reviews, page, perPage, totalPage, total });
    } catch (error) {
      next(error);
    }
  })
  
  // 3. 리뷰 상세 정보 조회
  reviewRouter.get('/specific/:reserveId', async function (req: Request, res:Response, next:NextFunction) {
    try {
      console.log(1);
      const reserveId = Number(req.params.reserveId);
      const review = await reviewService.findReview(reserveId);
      res.status(200).json(review);
    } catch (error) {
      next(error);
    }
  });

// 5. 리뷰 정보 삭제
reviewRouter.delete('/', async (req: Request, res:Response, next:NextFunction) => {
// reviewRouter.delete('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
  try {
    const reviewInfo:reviewInfo= req.body;
    const result = await reviewService.removeReview(reviewInfo);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface reviewInfo{
  reserveId:number,
  comment: string,
  ownerComment?: string,
  rating: number,
  image: string[],
  REGNumber: string,
}

export { reviewRouter };
