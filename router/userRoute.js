const express = require('express');
const router = express.Router();

const user = require('../controller/user');

router.get('/add-user', user.getAddUser);
router.post('/add-user', user.createUser);

module.exports = router;