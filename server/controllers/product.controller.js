const Product = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.getAllProducts = (request, response) => {
  Product.find({}) //TODO check to see if {}is necessary
    .then((products) => {
      console.log(products);
      response.json(products);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
