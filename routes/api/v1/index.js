const Router = require('express').Router;
const router = Router();

const usersApi = require('./users');

router.use('/users', usersApi);

module.exports = router;
