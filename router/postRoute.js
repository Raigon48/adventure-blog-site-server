const express = require('express');
const router = express.Router();

const posts = require('../controller/posts');

router.post('/create-post', posts.createPost);

module.exports = router;