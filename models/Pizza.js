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
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

// Virtual to get total count of comments and replies on retrieval of data
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

// Create the Pizza Model using PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// Export the model
module.exports = Pizza;