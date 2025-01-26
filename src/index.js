// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()
import connectDB from '../src/db/index.js'
import {app} from '../src/app.js'
connectDB().then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);  
    })
}).catch((err)=>{
    console.error("MONGODB connection FAILED !!!",err.message);
    process.exit(1)
})
