import axios from 'axios';
import { useEffect, useState } from 'react';
import PostHistory from '../component/PostHistory';

//post
export async function AddChosenPost(post) { //you could change the name of the func if you want
    await axios.post('http://localhost:3000/addChosenPost', post).then(
        res => {
            // console.log(JSON.stringify(res.data));
            alert('the post that i added' + JSON.stringify(res.data))
        }

    ).catch(err => {
        alert('err in the addChosen server')
    })
}
//post
// export const myPosts=[];
// export async function GetUsersChosenPosts(user) {
//     await axios.get(`http://localhost:3000/getUsersChosenPosts/${user.id}`).then( res => {
//             myPosts = JSON.stringify(res.data);
//             alert('creatAccount res ' + myPosts);
//         })
//         .catch((err) => {
//             alert('sorry an error occurred please try again later')
//         })
// }

// export function Parent() {

// const user = {
//     _id: "602bf8e1d2f6343c4004092f",
//     name: "Minds",
//     email: "lemindy43@gmail.com",
//     password: "333333"
// }
// const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         GetUsersChosenPosts(user);
//     }, []);

//     const GetUsersChosenPosts = (user) => {
//         axios.get(`http://localhost:3000/getUsersChosenPosts/${user.id}`).then(res => {
//             const myPosts = JSON.stringify(res.data);
//             setPosts(myPosts)
//             alert('creatAccount res ' + posts);
//         })
//             .catch((err) => {
//                 alert('sorry an error occurred please try again later')
//             })
//     }

//     return (<PostHistory myPostsList={posts} />);
// }
//post
export function GetUsersChosenPosts(user) {
    const id = user._id;
    return axios.get(`http://localhost:3000/getUsersChosenPosts/${id}`);
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


