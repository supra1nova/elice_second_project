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

// admin 전용 전체 예약 조회
reserveRouter.get('/admin/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const page = Number(req.query.page) || 1;
    const perPage= Number(req.query.perPage) ||12;

    const [total, reserves] = await Promise.all([
      reserveService.countReserves(),
      await reserveService.getRangedReserves(page, perPage)
    ]);
    const totalPage = Math.ceil(total / perPage);
    // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
    res.status(200).json({ reserves, page, perPage, totalPage, total });
  } catch (error) {
    next(error);
  }
})

// 특정 사업자 기준 예약 조회
reserveRouter.get('/owner/:REGNumber', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const { REGNumber } = req.params
    const page = Number(req.query.page) || 1;
    const perPage= Number(req.query.perPage) ||12;

    const [total, reserves] = await Promise.all([
      reserveService.countReservesByREGNumber(REGNumber),
      await reserveService.getRangedReservesByREGNumber(REGNumber, page, perPage)
    ]);
    const totalPage = Math.ceil(total / perPage);
    // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
    res.status(200).json({ reserves, page, perPage, totalPage, total });
  } catch (error) {
    next(error);
  }
})

// 특정 이메일 기준 예약 조회
reserveRouter.get('/user/:email', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const { email } = req.params
    const page = Number(req.query.page) || 1;
    const perPage= Number(req.query.perPage) ||12;

    const [total, reserves] = await Promise.all([
      reserveService.countReservesByEmail(email),
      await reserveService.getRangedReservesByEmail(email, page, perPage)
    ]);
    const totalPage = Math.ceil(total / perPage);
    // 제품 목록(배열), 현재 페이지, 전체 페이지 수, 전체 제품 수량 등 을 json 형태로 프론트에 전달
    res.status(200).json({ reserves, page, perPage, totalPage, total });
  } catch (error) {
    next(error);
  }
})

// 3. 예약 상세 정보 조회
reserveRouter.get('/:reserveId', async function (req: Request, res:Response, next:NextFunction) {
  try {
    const reserveId = Number(req.params.reserveId);
    const reserve = await reserveService.findReserve(reserveId);
    res.status(200).json(reserve);
  } catch (error) {
    next(error);
  }
});

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
  email?: string,
  number: number,
  comment?:string,
  phoneNumber?:string,
  name:string,
  // menuList: number[],
  // quantityList:number[],
  // totalPrice: number,
  REGNumber: string,
}
export { reserveRouter };
