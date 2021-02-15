const router = require('express').Router();
const user = require('../controllers/user')
const posts = require('../controllers/posts')

//user
router.get('/login/:email/:password',user.login)
router.post('/createAccount/',user.createAccount)

//posts
router.get('/getUsersChosenPosts/:id',posts.getUsersChosenPosts)
router.post('addChosenPost',posts.addChosenPost)

module.exports = router;

