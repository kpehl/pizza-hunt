// Index File for API Routes
// Dependencies
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes');

// Add the sub directory `/pizzas` to the routes created in pizza-routes.js
router.use('/pizzas', pizzaRoutes);

// Add the sub directory `/comments` to the routes created in comment-routes.js
router.use('/comments', commentRoutes);

// Export the router
module.exports = router;