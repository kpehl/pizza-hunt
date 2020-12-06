// Comment API Routes
const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// Add a comment to a pizza /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// Add a reply to a comment or remove a comment /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// Remove a reply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;