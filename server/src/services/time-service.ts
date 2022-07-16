import { TimeModel, timeModel} from "../db/data-source"
import { timeInfo} from '../routers'

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
  async removeTime(timeId:number){
    let time = await this.timeModel.findTimeByTimeId(timeId);
    if (time == null) {
      throw new Error('존재하지 않는 시간대입니다.');
    }
    else if (time.initialRemainder!==time.remainder){
      throw new Error('예약자가 존재합니다');
    }
    else{
      try{
        const time= await this.timeModel.deleteTime( timeId );
      }catch(error) {
        throw new Error('삭제에 실패했습니다. 다시 한 번 확인해 주세요.');
      }
    }
    return time;
  }

  async getTime(REGNumber:string, year:number,month:number, date:number){
    console.log("---------", REGNumber,year,month,date);
    const times= await this.timeModel.findTimeByQuery(REGNumber,year,month,date)
    return times;
  }

  async setTime(timeId:number,  year:number,month:number, date:number,hour:number){
    const updatedTime = await this.timeModel.updateTime (timeId,  year,month, date,hour);
    return updatedTime;  }

  async findTime(timeId:number){
    const time= await this.timeModel.findTime(timeId)
    return time
  }
}

const timeService = new TimeService(timeModel);

export { timeService };
