import {AppDataSource} from "../data-source"
import {Wish} from '../entity/Wish'
/**
 * Loads all posts from the database.
 */
export class WishModel{
  
  // 1. 찜 생성
  async create(email:string ,REGNumber:string){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Wish)
    .values(
      {REGNumber:REGNumber,
      email:email}
    )
    .execute()
  }
  
  // 2. 특정 상호 관련 전체 찜 조회
  async findWishByEmail(email: string) {
    const reviewRepository= AppDataSource.getRepository(Wish);
    // get a post repository to perform operations with post
    const review = await reviewRepository.find({
      where: {email: email}
    })
    return (review);
  }


  // 5. 찜 삭제
  async deleteWish(wishId:number){
    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Wish)
    .where('wishId = :wishId',{wishId:wishId})
    .execute()
  }
}

const wishModel= new WishModel();
export{wishModel};