import { OwnerReviewModel, ownerReviewModel} from "../db/data-source"
import { ownerReviewInfo } from "src/routers";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class OwnerReviewService {
  ownerReviewModel: OwnerReviewModel
  // 본 파일의 맨 아래에서, new OwnerReviewService(ownerReviewModel) 하면, 이 함수의 인자로 전달됨
  constructor(ownerReviewModel:OwnerReviewModel) {
    this.ownerReviewModel = ownerReviewModel;
  }

  // 1. 생성
  async addOwnerReview(ownerReviewInfo:ownerReviewInfo) {
    const newOwnerReviewInfo:ownerReviewInfo = ownerReviewInfo;
    const createdNewUser = await this.ownerReviewModel.create(newOwnerReviewInfo);
    return createdNewUser;
  }

  // 2. 삭제
  async removeOwnerReview(ownerReviewInfo:ownerReviewInfo){
    const {reserveId}= ownerReviewInfo;
    let ownerReview = await this.ownerReviewModel.findOwnerReviewByReserveId(reserveId);
    if (ownerReview == null) {
      throw new Error('존재하지 않는 리뷰입니다.')
    };
    try{
      await this.ownerReviewModel.deleteOwnerReview( reserveId );
    }
    catch(error) {
      throw new Error(
        '삭제에 실패했습니다. 다시 한 번 확인해 주세요.'
      );
    }
    return ownerReview;

  }
}

const ownerReviewService = new OwnerReviewService(ownerReviewModel);

export { ownerReviewService };
