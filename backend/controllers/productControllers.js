exports.getProducts =(request, response, next)=>{
    response.status(200).json({
        success:true,
        message:"this route will show all the product in db"
    })
}



