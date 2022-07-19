import { DataSource } from 'typeorm';
import {
  User,
  Category,
  Menu,
  Reserve,
  Restaurant,
  Review,
  Time,
  Wish,
  ReviewImage,
  RestaurantImage,
  Rating,
} from './entity/index';
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.host,
  port: 3306,
  username: process.env.user,
  password: process.env.password,
  database: process.env.database,
  synchronize: true,
  // synchronize: true,
  logging: true,
  entities: [
    User,
    Category,
    Menu,
    Reserve,
    Restaurant,
    Review,
    Time,
    Wish,
    ReviewImage,
    RestaurantImage,
    Rating
  ],
  migrations: [],
});

export * from './model/Category-Model';
export * from './model/User-Model';
export * from './model/Restaurant-Model';
export * from './model/Review-Model';
export * from './model/Reserve-Model';
export * from './model/Time-Model';
export * from './model/Menu-Model';
export * from './model/Wish-Model';
export * from './model/RestaurantImage-Model';
export * from './model/ReviewImage-Model';
export * from './model/Rating-Model';

// export * from './model/Restaurant-Model';
