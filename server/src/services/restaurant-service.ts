import { restaurantInfo } from 'src/routers';
import { RestaurantModel,restaurantModel } from '../db/data-source';


class RestaurantService {
  restaurantModel: RestaurantModel
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(restaurantModel:RestaurantModel) {
    this.restaurantModel = restaurantModel;
  }
  //구현필요
  

  // async getItem(product_id){
  //   const product= await this.productModel.findByProductId(product_id);
  //   if(!product){
  //     throw new Error(
  //       '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.'
  //     );
  //   }
  //   return product;
  // }
  // async getItems(req_input){
  //   const {sex,type}= req_input;
  //   const category= {sex,type};
  //   const products= await this.productModel.findByCategory(category);
  //   if(!products){
  //     throw new Error(
  //       '해당 제품이 존재하지 않습니다. 다시 한 번 확인해 주세요.'
  //     );
  //   }
  //   return products
  // }
 async addRestaurant (restaurantInfo:restaurantInfo){
   const createdproduct = await this.restaurantModel.create(restaurantInfo);
   return createdproduct;
 }

  async removeRestaurant (REGNumber:string, email:string){

    const restaurant = await restaurantModel.findRestaurantByOwnerEmail(email);

    let a:string|undefined = restaurant?.REGNumber
    if(a===undefined) throw new Error("권한이 없습니다") // 자기소유의 restaurant없음
    else{ 
        if(a!==REGNumber) throw new Error("권한이 없슴");
          const deletedRestaurant= await this.restaurantModel.deleteRestaurant(REGNumber);
          return deletedRestaurant;
        }
  }
  
 
  async countRestaurants() {
    const userCount = await this.restaurantModel.countAll();
    return userCount;
  }

  // 4. 특정 범위(페이지) 위치한 제품 정보 조회
  async getRangedRestaurants(page:number,perPage:number) {
    const rangedProductsInfo = await this.restaurantModel.getInRange(page, perPage);
    return rangedProductsInfo;
  }
  // async getAllProduct(){
  //   const allProducts= await this.productModel.findAll();
  //   return allProducts;
  // }

  // async deleteByCategory(input){
  //   const { sex, type } = input;
  //   const deletedCount= await this.productModel.deleteByCategory(input);
  //   return deletedCount;
  // }

  // async setProduct(product_id,toUpdate) {
 
  //   const updatedProduct = await this.productModel.update({
  //     product_id,
  //     update: toUpdate,
  //   });

  //   return updatedProduct;
  // }
}



const restaurantService = new RestaurantService(restaurantModel);

export { restaurantService };
