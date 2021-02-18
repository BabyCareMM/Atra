import { useState } from "react";
import { connect } from "react-redux";
import { GetUsersChosenPosts as chosenPostsService } from '../services/post'
// import {Parent} from '../services/post'

export default function PostHistory() {

    const user = {
        _id: "602bf8e1d2f6343c4004092f",
        name: "Minds",
        email: "lemindy43@gmail.com",
        password: "333333"
    }
    const [post, setPost] = useState([]);

    function clickme() {
        chosenPostsService(user).then(res => {
            alert(res.data.chosenPosts)
            setPost(res.data.chosenPosts)
            alert(post);
        })
            .catch((err) => {
                alert('error in getting my posts'+err)
            })
    }

    return (<>
        <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" onClick={clickme}>my posts</button>
        {post.map((chosenPosts, index) => (
            <div key={chosenPosts._id} className="card" style={{ 'width': '16rem', 'display': 'inline-block', 'margin': '5px' }}>
                <div className="card-body">
                    <h5 className="title">{chosenPosts.title}</h5>
                    <p className="card-text">{chosenPosts.body}</p>
                    <p className="card-text">Added to collection on : {chosenPosts.date}</p>
                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" >Edit</button>
                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" >Delete</button>
    
                </div>
            </div>
        ))}
    </>)

}