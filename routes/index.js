// Index router for HTML and API Routes

const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add the `/api` sub directory prefix to all of the imported api routes
router.use('/api', apiRoutes);
// html routes are served from the root directory
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
