import { DataSource } from "typeorm"
import {  User, Category, Menu, Reserve, Restaurant, Review, Time } from "./entity/index"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "34.64.150.160",
  port: 3306,
  username: "admin",
  password: '0000',
  database: 'matjip',
  synchronize: false,
  logging: true,
  entities: [  User, Category, Menu, Reserve, Restaurant, Review, Time],
  migrations: [],
})

export * from './model/Category-Model';
export * from './model/User-Model';
export * from './model/Restaurant-Model';
export * from './model/OwnerReview-Model';
export * from './model/Review-Model';
// export * from './model/Restaurant-Model';
