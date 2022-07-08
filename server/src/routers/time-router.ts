import { Router, Request, Response,NextFunction } from 'express';
import {timeService} from '../services'
import { ownerRequired } from 'src/middlewares';

const timeRouter = Router();

// // 1. 타임 생성
timeRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
      let timeInfo:timeInfo= req.body
      console.log(req.body)
      const newReview = await timeService.addTime(timeInfo);
      res.status(201).json(newReview);
    }
  catch (error) {
    next(error);
  }
});


// // 2. 타임 목록 조회 (배열 형태로 반환)
// timeRouter.get('/', ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     const times = await timeService.getTimes();
//     res.status(200).json(times);
//   } catch (error) {
//     next(error);
//   }
// });

// // 3. 타임 상세 정보 조회
// timeRouter.get('/:timeId', async function (req: Request, res:Response, next:NextFunction) {
//   try {
//     const { timeId } = req.params;
//     const time = await timeService.findTime(timeId);
//     res.status(200).json(time);
//   } catch (error) {
//     next(error);
//   }
// });

// // 4. 타임 정보 업데이트
// timeRouter.patch('/:timeId', ownerRequired, async (req: Request, res:Response, next:NextFunction) => {
//   try {
//     if (is.emptyObject(req.body)) {
//       throw new Error(
//         'headers의 Content-Type을 application/json으로 설정해주세요'
//       );
//     }
//     const timeId = req.params.timeId;
//     const { REGNumber, startAt, remainder } = req.body;    // req.body 로부터 업데이트할 정보 추출
//     const toUpdate = {    // 업데이트할 정보가 있다면, 업데이트용 객체에 삽입
//       ...(REGNumber && { REGNumber }),
//       ...(startAt && { startAt }),
//       ...(remainder && { remainder }),
//     };
//     const updatedTimeInfo = await timeService.setTime(
//       timeId,
//       toUpdate
//     );
//     res.status(200).json(updatedTimeInfo);    // 업데이트된 데이터를 프론트에 json 형태로 전달
//   } catch (error) {
//     next(error);
//   }
// });

// // 5. 타임 정보 삭제
// timeRouter.delete('/:timeId', ownerRequired, async (req, res, next) => {
//   try {
//     const { timeId } = req.params;
//     const result = await timeService.removeTime(timeId);
//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

export interface startAt{
  year:number,
  month:number,
  date:number,
  hour:number
}

export interface timeInfo{
  timeId?: number,
  REGNumber: string,
  startAt:startAt,
  remainder: number,
}

export { timeRouter };
