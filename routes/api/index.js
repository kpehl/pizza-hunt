// Index File for API Routes
// Dependencies
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// Add the sub directory `/pizzas` to the routes created in pizza-routes.js
router.use('/pizzas', pizzaRoutes);

// Export the router
module.exports = router;