const User = require('../models/user')

const login = async (req, res) => {
    try {
        const paramaters = req.params
        const user = await User.findOne({ email: paramaters.email, password: paramaters.password })
        res.status(200).json(user)
        console.log('user: ' + user)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

const createAccount = async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        res.status(200).json(newUser)
        console.log('user created: ' + newUser)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
const hello = async (req, res) => {
    res.status(200).send("hello")
}

//for programmers use
const allUsers = async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json( users)
        console.log('users: ' + user)


    }
    catch(error){
        res.send(error.message)
    }
}

module.exports = { login, createAccount,allUsers, hello }

// user:{
// "chosenPosts": [],
// "_id": "602c12d3b815881bb036ada7",
// "name": "Malka",
// "email": "malka@gmail.com",
// "password": "123456",
// "__v": 0
// }