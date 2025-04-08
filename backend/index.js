import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

import {app} from "../backend/app.js"
import {connection} from "../backend/config/connection.js"

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('server is running on port',process.env.PORT);
    })
}).catch((err)=>{
    console.log(err)
})