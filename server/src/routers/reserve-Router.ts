import { Router, Request, Response,NextFunction } from 'express';
import { reserveService } from '../services/reserve-service';
import { loginRequired } from 'src/middlewares';

const reserveRouter = Router();

// // 1. 예약 생성
reserveRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
      let reserveInfo:reserveInfo= req.body
      const newReview = await reserveService.addReserve(reserveInfo);
      res.status(201).json(newReview);
    }
  catch (error) {
    next(error);
  }
});
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
// reserveRouter.delete('/', loginRequired, async (req, res, next) => {
reserveRouter.delete('/', async (req, res, next) => {
  try {
    const {reserveId, email} = req.body;
    console.log(req)
    
    const result = await reserveService.removeReserve(reserveId,email);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export interface reserveInfo{
  reserveId?:number,
  timeId: number,
  email: string,
  number: number,
  menuList: number[],
  quantityList:number[],
  totalPrice:number
}
export { reserveRouter };
