const Product = require("../modal/productModal"); 

exports.createProduct = async(req, res, next) => {

    const product = await Product.create({
      Name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      location: req.body.location ,
      
    });
    res.status(201).json({
        status: 'success',
        data: {
          data: product
        }
      });
};

exports.getProducts = async (req, res, next)=> {
    const product = await Product.find();
  
    res.status(200).json({
      status: 'sucess',
      data: {
        product
      } 
    });
  };

  exports.updateProduct = async (req, res, next) => {
      console.log(req.body)
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  
    if (!product) {
      return  res.status(401).json({
          status: 'failure',
          message: 'no product found with this id'
      });
    }
  
    res.status(200).json({
      status: 'success',
      message: "product data Updated successfully",
      data: {
        data: product
      }
    });
  };
  
  exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
  
    if(!product) {
      return res.status(401).json({
        status: 'failure',
        message: 'no product found with this id'
    });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  };