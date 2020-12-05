// Pizza API Routes
// Dependencies
// Express
const router = require('express').Router();
// Pizza Controllers
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controllers');

// GET all pizzas and POST new pizza at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// GET one pizza, PUT update a pizza, and DELETE a pizza at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);


module.exports = router;