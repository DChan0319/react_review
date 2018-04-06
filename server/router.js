var router = require('express').Router();
import controller from './controller';

//Get Requests
router.get('/games', controller.games.get);
router.get('/streamers', controller.streamers.get);
//router.get('/streamers', controller);

//Post Requests
router.post('/games', controller.games.post);
router.post('/streamers', controller.streamers.post);
// router.post('/findGame', controller);
// router.post('/streamers', controller);

module.exports = router;