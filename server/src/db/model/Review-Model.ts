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