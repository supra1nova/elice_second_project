// import { Router, Request, Response,NextFunction } from 'express';
// import is from '@sindresorhus/is';
// import { ownerRequired } from 'src/middlewares';


// const ownerReviewRouter = Router();

// // 1. 업주 리뷰 생성
// ownerReviewRouter.post('/create', ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const { reserveId, comment } = req.body
//     const newOwnerReview = await ownerReviewService.addOwnerReview({ reserveId, comment });
//     res.status(201).json(newOwnerReview);
//   } catch (error) {
//     next(error);
//   }
// });

// // 2. 업주 리뷰 목록 조회 (배열 형태로 반환)
// ownerReviewRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const reviews = await ownerReviewService.getOwnerReviews();
//     res.status(200).json(reviews);
//   } catch (error) {
//     next(error);
//   }
// });

// // 3. 업주 리뷰 상세 정보 조회
// ownerReviewRouter.get('/:reserveId', async function (req: Request, res:Response, next:NextFunction) {
//   try {
//     const { reserveId } = req.params;
//     const review = await ownerReviewService.findOwnerReview(reserveId);
//     res.status(200).json(review);
//   } catch (error) {
//     next(error);
//   }
// });

// // 4. 업주 리뷰 정보 업데이트
// ownerReviewRouter.patch('/:reserveId', ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     if (is.emptyObject(req.body)) {
//       throw new Error(
//         'headers의 Content-Type을 application/json으로 설정해주세요'
//       );
//     }
//     const reserveId = req.params.reserveId;
//     const { comment } = req.body;    // req.body 로부터 업데이트할 정보 추출
//     const toUpdate = {    // 업데이트할 정보가 있다면, 업데이트용 객체에 삽입
//       ...(comment && { comment }),
//     };
//     const updatedOwnerReviewInfo = await ownerReviewService.setOwnerReview(
//       reserveId,
//       toUpdate
//     );
//     res.status(200).json(updatedOwnerReviewInfo);    // 업데이트된 데이터를 프론트에 json 형태로 전달
//   } catch (error) {
//     next(error);
//   }
// });

// // 5. 업주 리뷰 정보 삭제
// ownerReviewRouter.delete('/:reserveId', ownerRequired, async (req, res, next) => {
//   try {
//     const { reserveId } = req.params;
//     const result = await ownerReviewService.removeOwnerReview(reserveId);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// export { ownerReviewRouter };
