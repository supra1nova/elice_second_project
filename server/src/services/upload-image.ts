// import dotenv from 'dotenv'

// // Create service client module using ES6 syntax.
// import { S3Client } from "@aws-sdk/client-s3";
// // Set the AWS Region.
// const REGION = process.env.REGION; //e.g. "us-east-1"
// // Create an Amazon S3 service client object.
// import AWS from "aws-sdk"
// // Import required AWS SDK clients and commands for Node.js.
// import { ListBucketsCommand } from "@aws-sdk/client-s3";

// // aws.config.update({
// // 	accessKeyId: process.env.AWS_ACCESS_KEY,
// // 	secretAccessKey: process.env.AWS_SECRET_KEY
// // })



// let path= require('path');
// let pathToJson= path.resolve(__dirname, './config.json')
// AWS.config.loadFromPath(pathToJson);
// var proxy = require('proxy-agent');
// AWS.config.update({
//   httpOptions: { agent: proxy('http://internal.proxy.com') }
// });
// console.log(AWS.config)
// const s3Client = new S3Client({ region: REGION });
// const multers3= require('multer-s3')


// export const upload = async () => {
//   try {
  
//     console.log("==============")
//     const data = await s3Client.send(new ListBucketsCommand({}));
//     if(data==undefined) throw new Error("Error");
//     console.log("Success", data.Buckets);
//     return data; // For unit tests.
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
