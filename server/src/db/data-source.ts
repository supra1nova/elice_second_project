import { DataSource } from "typeorm"
import {  User, Category, Menu, OwnerReview, Reserve, Restaurant, Review, Time } from "./entity/index"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "34.64.150.160",
  port: 3306,
  username: "admin",
  password: '0000',
  database: 'matjip',
  synchronize: false,
  logging: true,
  entities: [  User, Category, Menu, OwnerReview, Reserve, Restaurant, Review, Time],
  migrations: [],
})

export * from './model/Category-Model';
export * from './model/User-Model';