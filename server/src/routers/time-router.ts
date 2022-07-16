import { Router, Request, Response,NextFunction } from 'express';
import {timeService} from '../services'
import { ownerRequired } from '../middlewares';

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

timeRouter.get('/', async (req: Request, res:Response, next:NextFunction) => {
  try {
    const REGNumber = String(req.query.REGNumber)
    const year= Number(req.query.year)
    const month= Number(req.query.month)
    const date= Number(req.query.date)
    const times = await timeService.getTime(REGNumber,year,month,date);
    res.status(200).json(times);
  } catch (error) {
    next(error);
  }
});

// // 3. 타임 상세 정보 조회
timeRouter.get('/:timeId', async function (req: Request, res:Response, next:NextFunction) {
  try {
    const  timeId  = Number(req.params.timeId);
    
    const time = await timeService.findTime(timeId);
    res.status(200).json(time);
  } catch (error) {
    next(error);
  }
});

// // 4. 타임 정보 업데이트
// timeRouter.patch('/:timeId', ownerRequired, async (req: Request, res:Response, next:NextFunction) => {

timeRouter.patch('/:timeId', async (req: Request, res:Response, next:NextFunction) => {
  try {
   
    const timeId = Number(req.params.timeId);
    const {year,month, date, hour}= req.body;    // req.body 로부터 업데이트할 정보 추출
    
    const updatedTimeInfo = await timeService.setTime(
      timeId,
      year,month,date,hour
    );
    res.status(200).json(updatedTimeInfo);    // 업데이트된 데이터를 프론트에 json 형태로 전달
  } catch (error) {
    next(error);
  }
});

// // 5. 타임 정보 삭제
// timeRouter.delete('/', ownerRequired, async (req, res, next) => {
timeRouter.delete('/', async (req, res, next) => {
  try {
    const {timeId}= req.body;
    const result = await timeService.removeTime(timeId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});




export interface timeInfo{
  timeId?: number,
  REGNumber: string,
  year:number,
  month:number,
  date:number,
  hour:number
  remainder: number,
  initialRemainder: number,
}



export { timeRouter };
