const app = require("./app");
const dotenv= require("dotenv");
const path = require("path");
const connectDatabase = require("./database");
const port = process.env.PORT || 3000;

dotenv.config({path:path.join(__dirname,"config/config.env")});

connectDatabase();

app.listen(port,()=>{
    console.log("hello server created :"+port)
})