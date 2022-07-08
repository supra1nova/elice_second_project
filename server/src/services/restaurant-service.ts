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
  async removeRestaurant (REGNumber:string){
    const deletedCount= await this.restaurantModel.deleteRestaurant(REGNumber);
    //MENU삭제가 수반되어야 함. 
    return deletedCount;
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
