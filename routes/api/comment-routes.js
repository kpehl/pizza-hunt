// Comment API Routes
const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// Add a comment to a pizza /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// Remove a comment /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;