const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postId: {
        type: String,
        default: true
    },
    title: {
        type: String,
        default: true
    },
    body: {
        type: String,
        default: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            require: true
        }
    ]
})

module.exports = mongoose.model('Posts', postSchema)