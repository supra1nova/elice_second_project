import { DataSource } from "typeorm"
import {  User, Category, Menu, Reserve, Restaurant, Review, Time,Wish ,ReviewImage,RestaurantImage} from "./entity/index"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "34.64.150.160",
  port: 3306,
  username: "admin",
  password: '0000',
  database: 'matjip',
  synchronize: false,
  // synchronize: true,
  logging: true,
  entities: [  User, Category, Menu, Reserve, Restaurant, Review, Time,Wish,ReviewImage,RestaurantImage],
  migrations: [],
})

export * from './model/Category-Model';
export * from './model/User-Model';
export * from './model/Restaurant-Model';
export * from './model/Review-Model';
export * from './model/Reserve-Model';
export * from './model/Time-Model';
export * from './model/Menu-Model';
export * from './model/Wish-Model';
export * from './model/RestaurantImage-Model';
export * from './model/Rating-Model';

// export * from './model/Restaurant-Model';
