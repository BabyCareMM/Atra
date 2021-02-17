const Posts = require('../models/posts')
const User = require('../models/user')

//gets all the posts the user chose
const getUsersChosenPosts = async (req, res) => {
    try {
        //check if it returns posts or user with posts
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
    const post = new Posts(req.body);
    try {
        await post.save()
        const user = await User.findByIdAndUpdate(req.body.users,{$push:{chosenPosts:post}},{new:true})
        // user.chosenPosts.push(post)
        await user.save()
        res.status(200).json(post)
    }
    catch (error) {
        res.status(400).send('error in the controller')
    }
}//"_id": "602d590d9d321434305a57ef"this is the first post Id 
// {
//     "chosenPosts": [
//         "602d672cf366c051c41830d4"
//     ],
//     "_id": "602bf8e1d2f6343c4004092f",
//     "name": "Minds",
//     "email": "lemindy43@gmail.com",
//     "password": "333333",
//     "__v": 0
// }


module.exports = { getUsersChosenPosts, addChosenPost }