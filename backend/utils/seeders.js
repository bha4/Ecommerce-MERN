const products = require("../data/products.json");
const product = require("../models/productModel");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database")

dotenv.config({path:"backend/config/config.env"});
connectDatabase();

const seedProduct =async ()=>{
    try{
        await product.deleteMany();
        console.log("deleted..")
        await product.insertMany(products);
        console.log("products added..")
    }
    catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProduct();