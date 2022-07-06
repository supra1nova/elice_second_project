import { AppDataSource } from "./data-source"

const main = async ()=>{
 try{
  AppDataSource.initialize();
  console.log("CONNECTED TO MYSQL");
  }
  catch (error){
  console.error(error);
  throw new Error("Unable to connect to mysql")
  }}
main();

export * from './controller/CategoryController';
