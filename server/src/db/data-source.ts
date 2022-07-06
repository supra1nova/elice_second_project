import { DataSource } from "typeorm"
import {User, Restaurant, Category, Like, Menu, OwnerReview, Reserve, Time } from "./entity/index"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "34.64.150.160",
  port: 3306,
  username: "admin",
  password: '0000',
  database: 'matjip',
  synchronize: false,
  logging: true,
  entities: [Like, Category, Menu, OwnerReview, Reserve, Restaurant, Time, User],
  subscribers: [],
  migrations: [],
})
