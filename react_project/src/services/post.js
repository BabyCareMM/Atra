import axios from 'axios';

//post
export async function AddChosenPost(post) { //you could change the name of the func if you want
    await axios.post('http://localhost:3000/addChosenPost', post).then(
        res => {
            console.log(JSON.stringify(res.data));
        },
        err => {
            res.status(400).send('sorry an error occurred please try again later' + err)
        }
    )
}
//post
export async function GetUsersChosenPosts(post) {
    await axios.get(`http://localhost:3000/getUsersChosenPosts/${post.id}`).then(
        res => {
            res.status(200).send('Your chosen posts are: ' + res.data)
        },
        err => {
            res.status(400).send('sorry an error occurred please try again later' + err)
        })
}