import Handlers from '../handlers/auth'
const express = require('express')
const router = express.Router()

router.post('/signup', Handlers.signup);
router.post('/login', Handlers.login);
router.get('/fetch-current', Handlers.fetchCurrent);

module.exports = router;