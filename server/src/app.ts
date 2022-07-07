import cors from 'cors';
import express, {Request, Response} from 'express';
import { userRouter,restaurantRouter} from './routers';
// likeRouter,  menuRouter,ownerReviewRouter,  restaurantRouter,  reviewRouter,  timeRouter,
import { } from './middlewares';
import { AppDataSource } from "./db/data-source"

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

const app = express();

// CORS 에러 방지
app.use(cors());

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());

// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));
app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Kate' },
    { id: 2, firstName: 'John' },
    { id: 3, firstName: 'oliver' },
  ];
  res.json(customers);
});
// html, css, js 라우팅
// app.use(viewsRouter);

// api 라우팅
// 아래처럼 하면, userRouter 에서 '/login' 으로 만든 것이 실제로는 앞에 /api가 붙어서
// /api/login 으로 요청을 해야 하게 됨. 백엔드용 라우팅을 구분하기 위함임.
// app.use('/api/likes', likeRouter);
// app.use('/api/menus', menuRouter);
// app.use('/api/ownerReviews', ownerReviewRouter);
// // app.use('/api/reserves', reserveRouter);
app.use('/api/restaurants', restaurantRouter);
// app.use('/api/reviews', reviewRouter);
// app.use('/api/times', timeRouter);
app.use('/api/users', userRouter);

// 순서 중요 (errorHandler은 다른 일반 라우팅보다 나중에 있어야 함)
// 그래야, 에러가 났을 때 next(error) 했을 때 여기로 오게 됨
// app.use(errorHandler);

export { app };
