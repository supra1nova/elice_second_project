import { ratingInfo } from 'src/routers';
import { AppDataSource } from '../data-source';
import { Rating } from '../entity/Rating';
/**
 * Loads all posts from the database.
 */
export class RatingModel {
  // 1. 별점 생성(초깃값 세팅)
  async create(ratingInfo: ratingInfo) {
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Rating)
      .values([ratingInfo])
      .execute();
  }

  // 2. 특정 상호 별점 전체 조회 - 사업자 등록번호 기준
  async findRatingsByREGNumber(REGNumber: string) {
    const ratingRepository = AppDataSource.getRepository(Rating);
    // get a post repository to perform operations with post
    const ratings = await ratingRepository.find({
      where: { REGNumber: REGNumber },
    });
    return ratings;
  }

  // 3. 특정 상호 별점 삭제
  async deleteRating(REGNumber: string) {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Rating)
      .where('REGNumber = :REGNumber', { REGNumber: REGNumber })
      .execute();
  }

  // 4. 평점 추가
  async updateRating(isAddition:boolean, rating: number, REGNumber: string) {
    const ratingRepository = AppDataSource.getRepository(Rating);
    const restaurantRating = await ratingRepository.find({
      where: { REGNumber: REGNumber },
    });
    if (isAddition) {
      switch (rating) {
        case 5:
          restaurantRating[0].Five += 1;
          break;
        case 4:
          restaurantRating[0].Four += 1;
          break;
        case 3:
          restaurantRating[0].Three += 1;
          break;
        case 2:
          restaurantRating[0].Two += 1;
          break;
        case 1:
          restaurantRating[0].One += 1;
          break;
      }
    } else {
      switch (rating) {
        case 5:
          restaurantRating[0].Five -= 1;
          break;
        case 4:
          restaurantRating[0].Four -= 1;
          break;
        case 3:
          restaurantRating[0].Three -= 1;
          break;
        case 2:
          restaurantRating[0].Two -= 1;
          break;
        case 1:
          restaurantRating[0].One -= 1;
          break;
      }
    }
    
    // Object.keys(restaurantRating[0])
    restaurantRating[0].Average = (restaurantRating[0].Five * 5 +
    restaurantRating[0].Four * 4 +
    restaurantRating[0].Three * 3 +
    restaurantRating[0].Two * 2 +
    restaurantRating[0].One * 1) /
    (restaurantRating[0].Five +
    restaurantRating[0].Four +
    restaurantRating[0].Three +
    restaurantRating[0].Two +
    restaurantRating[0].One)
    
    const updatedRating = await ratingRepository.update(REGNumber, restaurantRating[0]);

    return updatedRating;
  }
};



const ratingModel = new RatingModel();
export { ratingModel };
