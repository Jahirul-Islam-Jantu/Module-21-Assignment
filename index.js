// import all essential packages
import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp"
import cookieParser from "cookie-parser"
import {
    MAX_JSON_SIZE,
    MONGODB_CONNECTION, PORT,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME, URL_ENCODED, WEB_CACHE,

} from "./app/config/config.js";
import router from "./routes/api.js";
import dotenv from "dotenv";
dotenv.config();


// crete an app instance
const app = express();

// configure global middlewares
app.use(cors())
app.use(express.json())
app.use(express.json({limit:MAX_JSON_SIZE}))
app.use(express.urlencoded({extended:URL_ENCODED}))
app.use(hpp())
app.use(helmet())
app.use(cookieParser())

// rate limiter
const limiter = rateLimit({windowMs:REQUEST_LIMIT_TIME, max:REQUEST_LIMIT_NUMBER})
app.use(limiter)

// connected to database
mongoose.connect(MONGODB_CONNECTION, {autoIndex: true}).then(()=>{
    console.log("connected to MongoDB")
}).catch(err=>{
    console.log(err)
})

// cache
app.set("etag", WEB_CACHE)

// router setup
app.use("/api", router)


// app listening with front end routing
app.listen(PORT, ()=>{
    console.log("App listening on PORT", PORT)
})
