const ProductController = require('../Product.controller');

module.exports = function (app) {
    app.get('/api', ProductController.index);
}