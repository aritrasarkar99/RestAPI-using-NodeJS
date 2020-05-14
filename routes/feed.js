const express = require('express');
const feedCont = require('../controllers/feed');

const router = express.Router()

router.get('/posts',feedCont.getPosts);
router.post('/post',feedCont.createPost);

module.exports = router;