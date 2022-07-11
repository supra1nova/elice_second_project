import { reviewInfo } from "src/routers";
import {AppDataSource} from "../data-source"
import {Review} from '../entity/Review'

/**
 * Loads all posts from the database.
 */
export class ReviewModel{
  
  async findReviewByReserveId(reserveId:number) {
    const reviewRepository= AppDataSource.getRepository(Review);
    // get a post repository to perform operations with post
    const review = await reviewRepository.findOneBy({
      reserveId: reserveId
    })
    return (review);
  }

  async create(reviewInfo:reviewInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Review)
    .values([
      reviewInfo,
    ])
    .execute()
  }

  async reply(reserveId:number, ownerComment:string){
    await AppDataSource
      .createQueryBuilder()
      .update(Review)
      .set({ ownerComment: ownerComment})
      .where("reserveId = :reserveId", { reserveId: reserveId })
      .execute()
  }

  // 
  async countAll() {
    const reviewRepository= AppDataSource.getRepository(Review);
    const count = await reviewRepository.count({
    })
    return count;
  }

  async countAllByREGNumber(REGNumber: string) {
    const reviewRepository= AppDataSource.getRepository(Review);
    const reviewsNumber = await reviewRepository.count({
      where: { REGNumber:REGNumber }
    })
    return reviewsNumber;
  }

    // 4-1. 특정 범위(페이지) 위치한 제품 정보 조회
    async getInRangeByREGNumber(REGNumber:string, page:number, perPage:number) {
      const reviewRepository= AppDataSource.getRepository(Review);
  
      const reviewsInRange = await reviewRepository.find({
        where: { REGNumber:REGNumber },
        order:{
          createdAt:"ASC"
        },
        skip:perPage*(page-1),
        take:perPage
      });
      return reviewsInRange;
    }

  // 4-2. 특정 범위(페이지) 위치한 제품 정보 조회
  async getInRange(page:number, perPage:number) {
    const reviewRepository= AppDataSource.getRepository(Review);

    const reviewsInRange = await reviewRepository.find({
      order:{
        createdAt:"ASC"
      },
      skip:perPage*(page-1),
      take:perPage
    });
    return reviewsInRange;
  }

  async deleteReview(reserveId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Review)
    .where('reserveId = :reserveId',{reserveId:reserveId})
    .execute()
  }
}

const reviewModel= new ReviewModel();
export{reviewModel};