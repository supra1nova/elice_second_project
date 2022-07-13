import { ratingInfo } from "src/routers";
import { AppDataSource } from "../data-source"
import { Rating } from '../entity/Rating'
/**
 * Loads all posts from the database.
 */
export class RatingModel{
  
  // 1. 별점 생성(초깃값 세팅)
  async create(ratingInfo:ratingInfo){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Rating)
    .values([
      ratingInfo
    ])
    .execute()
  }

  // 2. 특정 상호 별점 전체 조회 - 사업자 등록번호 기준
  async findRatingsByREGNumber(REGNumber: string) {
    const ratingRepository= AppDataSource.getRepository(Rating);
    // get a post repository to perform operations with post
    const ratings = await ratingRepository.find({
      where: {REGNumber: REGNumber}
    })
    return (ratings);
  }

  // 5. 특정 상호 별점 삭제
  async deleteRating(REGNumber:string){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Rating)
    .where('REGNumber = :REGNumber',{REGNumber:REGNumber})
    .execute()
  }

}

const ratingModel = new RatingModel();
export { ratingModel };