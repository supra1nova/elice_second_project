import { TimeModel, timeModel} from "../db/data-source"
import {timeInfo} from '../routers'

class TimeService {
  timeModel: TimeModel
  // 본 파일의 맨 아래에서, new TimeService(timeModel) 하면, 이 함수의 인자로 전달됨
  constructor(timeModel:TimeModel) {
    this.timeModel = timeModel;
  }

  // 1. 생성
  async addTime(timeInfo:timeInfo) {
    const newTimeInfo:timeInfo = timeInfo;
    const createdNewReview = await this.timeModel.create(newTimeInfo);
    return createdNewReview;
  }


  // 2. 삭제
  // async removeTime(timeInfo:timeInfo){
  //   const {reserveId}= timeInfo;
  //   let review = await this.timeModel.findReviewByReserveId(reserveId);
  //   if (review == null) {
  //     throw new Error('존재하지 않는 리뷰입니다.')
  //   };
  //   try{
  //     await this.timeModel.deleteReview( reserveId );
  //   }
  //   catch(error) {
  //     throw new Error(
  //       '삭제에 실패했습니다. 다시 한 번 확인해 주세요.'
  //     );
  //   }
  //   return review;

  // }
}

const timeService = new TimeService(timeModel);

export { timeService };
