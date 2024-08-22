const app = require("./app");
const dotenv= require("dotenv");
const path = require("path");
const connectDatabase = require("../backend/config/database");


dotenv.config({path:path.join(__dirname,"config/config.env")});

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log("hello server created :"+process.env.PORT)
})