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
        res.status(200).json(newUser)//should it return the whole user or only the name and email?
        console.log('user created: ' + newUser)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { login, createAccount }