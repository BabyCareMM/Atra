const Posts = require('../models/posts')
const User = require('../models/user')

//gets all the posts the user chose
const getUsersChosenPosts = async (req, res) => {
    try {
        const posts = await User.findById(req.params.id).populate('Posts')
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
//?? chosenPosts i think you have to push in the id not the whole post
//creates a new post for the user that chose it
const addChosenPost = async (req, res) => {
    const post = new Post(req.body)
    try {
        await post.save()
        const user = await User.findById(req.body.userId)
        user.chosenPosts.push(post)
        await user.save()
        res.status(200).json('post chosen successfully')
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { getUsersChosenPosts, addChosenPost }