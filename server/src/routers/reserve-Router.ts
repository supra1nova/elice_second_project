// import { Router, Request, Response,NextFunction } from 'express';
// import { loginRequired } from 'src/middlewares';

// const reserveRouter = Router();

// // 1. 예약 생성
// reserveRouter.post('/create', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const { reserveId, timeId, timestamp, email, number, menus, totalPrice } = req.body
//     const newReserve = await reserveService.addTime({ reserveId, timeId, timestamp, email, number, menus, totalPrice });
//     res.status(201).json(newReserve);
//   } catch (error) {
//     next(error);
//   }
// });

// // 2. 예약 목록 조회 (배열 형태로 반환)
// reserveRouter.get('/', loginRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const reserves = await reserveService.getReserves();
//     res.status(200).json(reserves);
  // } catch (error) {
//     next(error);
//   }
// });

// // 3. 예약 상세 정보 조회
// reserveRouter.get('/:reserveId', async function (req: Request, res:Response, next:NextFunction) {
//   try {
//     const { reserveId } = req.params;
//     const reserve = await reserveService.findReserve(reserveId);
//     res.status(200).json(reserve);
//   } catch (error) {
//     next(error);
//   }
// });

// // 4. 예약 정보 삭제
// reserveRouter.delete('/:reserveId', loginRequired, async (req, res, next) => {
//   try {
//     const { reserveId } = req.params;
//     const result = await reserveService.removeReserve(reserveId);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// export { reserveRouter };
