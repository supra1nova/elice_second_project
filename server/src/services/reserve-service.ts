import { ReserveModel, reserveModel} from "../db/data-source"
import { timeModel } from "../db/data-source";
import { reserveInfo } from "src/routers/reserve-Router";
import { timeInfo } from "src/routers";
import { NewLineKind } from "typescript";

class ReserveService {
  reserveModel: ReserveModel
  // 본 파일의 맨 아래에서, new ReviewService(reviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(reserveModel:ReserveModel) {
    this.reserveModel = reserveModel;
  }
  
  // 1. 생성
  async addReserve(reserveInfo:reserveInfo) {
    const { timeId, number } = reserveInfo;
    const time = await timeModel.findTimeByTimeId(timeId);
    console.log(11111);
    console.log(time);
    let a:number|undefined = time?.remainder
    if(a===undefined) throw new Error("Time not found");
    else{
      if(a-number<=0) throw new Error("잔여좌석이 없습니다");
      else{
        await timeModel.updateRemainder(timeId,a-number)
        
        const createdNewReserve = await this.reserveModel.create(reserveInfo);
        return createdNewReserve;
      }
    }
    //Time의 remainder를 우선적으로 줄이되 0보다 작으면 거절함.
  }

  // 전체 예약 숫자 카운트
  async countReserves() {
    const reservesNumber = await this.reserveModel.countAll();
    return reservesNumber;
  }
  
  // 전체 예약 조회
  async getRangedReserves(page:number,perPage:number) {
    const rangedReservesInfo = await this.reserveModel.getInRange(page, perPage);
    return rangedReservesInfo;
  }

  // 특정 이메일 기준 예약 숫자 카운트
  async countReservesByEmail(email: string) {
    const reservesNumber = await this.reserveModel.countAllByEmail(email);
    return reservesNumber;
  }
  
  // 특정 이메일 기준 전체 예약 조회
  async getRangedReservesByEmail(email:string, page:number,perPage:number) {
    const rangedReservesInfo = await this.reserveModel.getInRangeByEmail(email, page, perPage);
    return rangedReservesInfo;
  }

    // 특정 사업자 기준 예약 숫자 카운트
    async countReservesByREGNumber(REGNumber: string) {
      const reservesNumber = await this.reserveModel.countAllByREGNumber(REGNumber);
      return reservesNumber;
    }
    
    // 특정 사업자 기준 전체 예약 조회
    async getRangedReservesByREGNumber(REGNumber:string, page:number,perPage:number) {
      const rangedReservesInfo = await this.reserveModel.getInRangeByREGNumber(REGNumber, page, perPage);
      return rangedReservesInfo;
    }
  
    // 5. 특정 예약 조회
    async findReserve(reserveId: number) {
      const rangedReseveInfo = await this.reserveModel.findReserveByReserveId(reserveId);
      return rangedReseveInfo;
    }


  // 2. 삭제
  async removeReserve(reserveId:number, email:string) {
    const reserve = await this.reserveModel.findReserveByReserveId(reserveId);
    let a:string|undefined = reserve?.email
    if(a===undefined) throw new Error("Time not found");
    else{
      if(a!==email) throw new Error("리뷰를 삭제할 권한이 없습니다.");
      else{        
        const deletedReserve = await this.reserveModel.deleteReserve(reserveId);
        return deletedReserve;
      }
    }
    //Time의 remainder를 우선적으로 줄이되 0보다 작으면 거절함.

  }
}

const reserveService = new ReserveService(reserveModel);

export { reserveService };
