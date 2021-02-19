import { useState } from "react";
import { connect } from "react-redux";
import { GetUsersChosenPosts as chosenPostsService, removePost as removePostService, addChosenPost } from '../services/post'

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

    function removePostHandler(e){
        const userPost ={
            user_id:'602bf8e1d2f6343c4004092f',
            _id: e._id
        }
        removePostService(userPost).then(res => {
            alert('post Removed in component: ' + res.status)
        })
        .catch((err) =>{
            alert('error in removing this post :(')
        })
    }

    function editPostHandler(e){
        const userPost ={
            user_id:'602bf8e1d2f6343c4004092f',
            _id: e._id
        }
        removePostService(userPost).then(res => {
            alert('post Removed in component: ' + res.status)
        })
        .catch((err) =>{
            alert('error in removing this post :(')
        })
        
        addChosenPost()

        }

    return (<>
        <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" onClick={clickme}>my posts</button>
        {post.map((chosenPosts, index) => (
            <div key={chosenPosts._id} className="card" style={{ 'width': '16rem','height':'25rem', 'display': 'inline-block', 'margin': '5px' }}>
                <div className="card-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => removePostHandler(chosenPosts)}><span aria-hidden="true">&times;</span></button>
                    <h5 className="title">{chosenPosts.title}</h5>
                    <p className="card-text">{chosenPosts.body}</p>
                    <p className="card-text">Added to collection on : {chosenPosts.date}</p>
                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" onClick={(e) => editPostHandler(chosenPosts)}>Edit</button>
    
                </div>
            </div>
        

                        {/* popUP  popUP popUP popUP popUP popUP popUP*/}
                        <div class="modal fade" id="centralModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title w-100" id="myModalLabel">{name}</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">{name} - {price} ש"ח</div>
                                    <img src={image} className="card-img-top" alt={name} />
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" href="#" className="btn btn-primary" href="#" className="btn btn-primary" onClick={(e) => clickHandler2(item)} type="button" class="btn btn-primary">Add to basket</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* popUP  popUP popUP popUP popUP popUP popUP*/}


        ))}
    </>)

}
//(e) => removePostHandler(chosenPosts)