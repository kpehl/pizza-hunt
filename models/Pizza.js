const { Schema, model } = require('mongoose')

// Pizza Schema
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// Create the Pizza Model using PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// Export the model
module.exports = Pizza;