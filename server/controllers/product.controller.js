const Product = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
