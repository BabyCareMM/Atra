const router = require('express').Router();
const user = require('../controllers/user')
const posts = require('../controllers/posts')


//user
router.get('/login/:email/:password', user.login)
router.post('/createAccount', user.createAccount)
router.get('/allUsers', user.allUsers)//for programmers use

//posts
router.get('/getUsersChosenPosts/:id', posts.getUsersChosenPosts)//gets the user that requested;
router.post('/addChosenPost', posts.addChosenPost)

module.exports = router;

