import { restaurantInfo, updateRestaurantInfo } from '../../routers';
import { AppDataSource } from '../data-source';
import { Restaurant } from '../entity';

export class RestaurantModel {
  // 1. 업체 생성
  async create(restaurantInfo: restaurantInfo) {
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Restaurant)
      .values([restaurantInfo])
      .execute();
  }

  // 2-1. REGNumber 이용 특정 업체 정보 조회
  async findRestaurantByREGNumber(REGNumber: string) {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    const restaurant = await restaurantRepository.findOneBy({
      REGNumber: REGNumber,
    });
    return restaurant;
  }

  // 2-2. email 이용 특정 업체 정보 조회
  async findRestaurantByOwnerEmail(ownerEmail: string) {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    const restaurant = await restaurantRepository.findOneBy({
      ownerEmail: ownerEmail,
    });
    return restaurant;
  }

  // 2-3. 특정 범위(페이지) 위치한 제품 정보 조회
  async getInRange(criteria: string, page: number, perPage: number) {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    if (criteria === 'default') {
      const restaurantsInRange = await restaurantRepository.find({
        order: {
          createdAt: 'ASC',
        },
        skip: perPage * (page - 1),
        take: perPage,
      });
      return restaurantsInRange;
    } else {
      const restaurantsInRange = await restaurantRepository.find({
        order: {
          average: 'DESC',
          createdAt: 'ASC',
        },
        skip: perPage * (page - 1),
        take: perPage,
      });
      return restaurantsInRange;
    }
  }

  // 3. 업체 정보 수정
  async updateRestaurant(
    REGNumber: string,
    updateRestaurantInfo: updateRestaurantInfo,
  ) {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    const updated = await restaurantRepository.update(
      REGNumber,
      updateRestaurantInfo,
    );
    return updated.affected;
  }

  // 4. 업체 정보 삭제
  async deleteRestaurant(REGNumber: string) {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(Restaurant)
      .where('REGNumber = :REGNumber', { REGNumber: REGNumber })
      .execute();
  }

  // 5. 전체 업체 숫자 카운트
  async countAll() {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    const count = await restaurantRepository.count({});
    return count;
  }

  // 6. 평점 추가
  async updateWisherNumber(isAddition: boolean, REGNumber: string) {
    const restaurantRepository = AppDataSource.getRepository(Restaurant);
    const restaurant = await restaurantRepository.find({
      where: { REGNumber: REGNumber },
    });
    if (isAddition) {
      restaurant[0].wishers += 1;
    } else {
      restaurant[0].wishers -= 1;
    }
    const ratingUpdatedRestaurant = await restaurantRepository.update(
      REGNumber,
      restaurant[0],
    );
    return ratingUpdatedRestaurant;
  }
}

const restaurantModel = new RestaurantModel();
export { restaurantModel };
