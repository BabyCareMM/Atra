import axios from 'axios';

//post
export async function AddChosenPost(post) { //you could change the name of the func if you want
    await axios.post('http://localhost:3000/addChosenPost', post).then(
        res => {
            console.log(JSON.stringify(res.data));
        },
        err => {
            console.log('err')
            // res.status(400).send('sorry an error occurred please try again later' + err)
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
            console.log('err')
            // res.status(400).send('sorry an error occurred please try again later' + err)
        })
}
//get
export function FetchPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}
// export let fetchPosts = [];
// export async function FetchPosts() {
//     await axios.get('https://jsonplaceholder.typicode.com/posts').then(
//         res => {
//             alert(JSON.stringify(res.data))
//             fetchPosts = JSON.stringify(res.data);
//             alert(fetchPosts)
//         }
//     ).catch(err => {
//         alert('err');
//     })
// }