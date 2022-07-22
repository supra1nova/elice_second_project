import { restaurantInfo, updateRestaurantInfo } from '../routers';
import { RestaurantModel, restaurantModel } from '../db/data-source';

class RestaurantService {
  restaurantModel: RestaurantModel;
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(restaurantModel: RestaurantModel) {
    this.restaurantModel = restaurantModel;
  }

  // 1. 업체 생성
  async addRestaurant(restaurantInfo: restaurantInfo) {
    const newRestaurant = await this.restaurantModel.create(restaurantInfo);
    return newRestaurant;
  }

  // 2-1. REGNumber 이용 특정 업체 정보 조회
  async getRestaurant(REGNumber: string) {
    const restaurant = await this.restaurantModel.findRestaurantByREGNumber(
      REGNumber,
    );
    if (!restaurant) {
      throw new Error(
        '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.',
      );
    }
    return restaurant;
  }

  // 2-2. email 이용 특정 업체 정보 조회
  async getRestaurantByEmail(email: string) {
    const restaurant = await this.restaurantModel.findRestaurantByOwnerEmail(
      email,
    );
    if (!restaurant) {
      throw new Error(
        '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.',
      );
    }
    return restaurant;
  }

  // 2-3. 특정 범위(페이지) 위치한 제품 정보 조회
  async getRangedRestaurants(criteria: string, page: number, perPage: number) {
    const rangedProductsInfo = await this.restaurantModel.getInRange(
      criteria,
      page,
      perPage,
    );
    return rangedProductsInfo;
  }

  // 3. 업체 정보 수정
  async setRestaurant(
    REGNumber: string,
    updateRestaurantInfo: updateRestaurantInfo,
  ) {
    const updatedRestaurant = await this.restaurantModel.updateRestaurant(
      REGNumber,
      updateRestaurantInfo,
    );
    return updatedRestaurant;
  }

  // 4. 업체 정보 삭제
  async removeRestaurant(REGNumber: string, email: string) {
    const restaurant = await restaurantModel.findRestaurantByOwnerEmail(email);
    const REGNumberResult: string | undefined = restaurant?.REGNumber;
    if (REGNumberResult === undefined)
      throw new Error('권한이 없습니다.'); // 자기소유의 restaurant없음
    else if (REGNumberResult !== REGNumber) {
      throw new Error('권한이 없습니다.');
    } else {
      const deletedRestaurant = await this.restaurantModel.deleteRestaurant(
        REGNumber,
      );
      return deletedRestaurant;
    }
  }

  // 5. 전체 업체 숫자 카운트
  async countRestaurants() {
    const restaurants = await this.restaurantModel.countAll();
    return restaurants;
  }
}

const restaurantService = new RestaurantService(restaurantModel);

export { restaurantService };
