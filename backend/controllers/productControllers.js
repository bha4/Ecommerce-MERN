const { request } = require("../app");
const productModel = require("../models/productModel")

// get all products - {{base_url}}/api/v1/products
exports.getProducts =async (request, response, next)=>{
    const products = await productModel.find();
    response.status(200).json({
        success:true,
        count:products.length,
        products
    })
}

//create product - {{base_url}}/api/v1/product/newProduct
exports.newProduct = async (request,response, next) => {
  const product = await productModel.create(request.body);
  response.status(201).json({
    success: true,
    product:product
  });
};

//get single product - {{base_url}}/api/v1/product/:id
exports.getSingleProduct = async (request,response, next) => {
  const product = await productModel.findById(request.params.id);
  if(!product){
    return response.status(404).json({
    success: false,
    message:"product not found"
  })
}
  response.status(201).json({
    success: true,
    product:product
  });
};

//update product - {{base_url}}/api/v1/product/:id
exports.updateProduct = async (request,response, next) => {
  const product = await productModel.findById(request.params.id);
  if(!product){
    return response.status(404).json({
    success: false,
    message:"product not found"
  })
}
    const products = await productModel.findByIdAndUpdate(request.params.id,request.body,{
      new:true,
      runValidators:true
    })
    response.status(201).json({
      success:true,
      products:products
    })
};

// Delete Product  - {{base_url}}/api/v1/product/:id
exports.deleteProduct = async (request,response,next)=>{
  const product = await productModel.findById(request.params.id);
  if (!product) {
    return response.status(404).json({
      success: false,
      message: "product not found",
    });
  }
  await product.deleteOne(product);

  response.status(200).json({
    success:true,
    message:"product deleted!.."
  })
}


