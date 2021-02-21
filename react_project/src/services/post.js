import axios from 'axios';
import { useEffect, useState } from 'react';
import PostHistory from '../component/PostHistory';

//post
// export async function AddChosenPost(post) { //you could change the name of the func if you want
//     await axios.post('http://localhost:3000/addChosenPost', post).then(
//         res => {
//             console.log(JSON.stringify(res.data));
//         },
//         err => {
//             res.status(400).send('sorry an error occurred please try again later' + err)
//         }
//     )
export async function AddChosenPost(post) { //you could change the name of the func if you want
    await axios.post('http://localhost:3000/addChosenPost', post).then(
        res => {
            // console.log(JSON.stringify(res.data));
            // alert('the post that i added' + JSON.stringify(res.data))
        }
    ).catch(err => {
        alert('err in the addChosen service' + err)
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

//get
export function FetchPosts() {
    return axios.get('http://jsonplaceholder.typicode.com/posts');
}

//post
export function GetUsersChosenPosts(user) {
    const id = user._id;
    return axios.get(`http://localhost:3000/getUsersChosenPosts/${id}`);
}

//post
export function removePost(userAndPost) {
    return axios.post('http://localhost:3000/removePost', userAndPost);
}


