import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GetUsersChosenPosts as chosenPostsService, removePost as removePostService, AddChosenPost } from '../services/post'
import { actions } from "../store/actions";

// import {Parent} from '../services/post'
const mapStateToProps = (state) => {
    return { ...state, user: state.userReducer.user || [] }
}
const mapDispatchToProps = (dispatch) => ({
    setUser: (loggedUser) => dispatch(actions.setUser(loggedUser))
})
const PostHistory = withRouter(function PostHistory(props) {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const { history } = props;
    // const user = {
    //     _id: "602bf8e1d2f6343c4004092f",
    //     name: "Minds",
    //     email: "lemindy43@gmail.com",
    //     password: "333333"
    // }
    const [post, setPost] = useState([]);

    function viewChosenPost() {
        chosenPostsService({_id:props.user.id}).then(res => {
            alert(res.data.chosenPosts)
            setPost(res.data.chosenPosts)
            alert(post);
        })
            .catch((err) => {
                alert('error in getting my posts' + err)
            })
    }
    // useEffect(() => {
    //     chosenPostsService(user).then(res => {
    //         setPost(res.data.chosenPosts)
    //     })
    //         .catch((err) => {
    //             alert('error in getting my posts' + err)
    //         })
    //     return 0
    // })

    function removePostHandler(e) {
        const userPost = {
            user_id: '602bf8e1d2f6343c4004092f',
            _id: e._id
        }
        removePostService(userPost).then(res => {
            alert('post Removed in component: ' + res.status)
        })
            .catch((err) => {
                alert('error in removing this post :(')
            })
    }

    function editPostHandler(e) {
        setTitle(e.title)
        setBody(e.body)
        const userPost = {
            user_id: '602bf8e1d2f6343c4004092f',
            _id: e._id
        }
        removePostService(userPost).then(res => {
            alert('post Removed in component: ' + res.status)
        })
            .catch((err) => {
                alert('error in removing this post :(')
            })

    }

    function SaveEdit(){
        const newPost ={
            title: title,
            body: body,
            users: props.user.id
        }
        AddChosenPost(newPost);
    }

    function redirectHandler() {
        history.push('/posts');
    }
    function redirectLoginHandler() {
        props.setUser({ name: '', id: '' });
        history.push('/login');
    }
    return (<>
            <input onClick={(e) => redirectLoginHandler(e)} type="submit" class="fadeIn fourth" value="Logout" />

        <input onClick={(e) => redirectHandler(e)} type="submit" class="fadeIn fourth" value="Back to posts" />
        <br />
        <button type="button" className="btn btn-primary waves-effect waves-light"  onClick={viewChosenPost}>Click here to see chosen posts</button>
        {post.map((chosenPosts, index) => (
            <div key={chosenPosts._id} className="card" style={{ 'width': '16rem', 'height': '25rem', 'display': 'inline-block', 'margin': '5px' }}>
                <div className="card-body">
                    <button type="button" className="close"  aria-label="Close" onClick={(e) => removePostHandler(chosenPosts)}><span aria-hidden="true">&times;</span></button>
                    <h5 className="title">{chosenPosts.title}</h5>
                    <p className="card-text">{chosenPosts.body}</p>
                    <p className="card-text">Added to collection on : {chosenPosts.date}</p>
                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" onClick={(e) => editPostHandler(chosenPosts)}>Edit</button>
                    {/* <button type="button" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" href="#" className="btn btn-primary" onClick={(e) => editPostHandler(chosenPosts)} type="button" class="btn btn-primary">Add to basket</button> */}

                </div>
                
                        {/* popUP  popUP popUP popUP popUP popUP popUP*/}
                        <div class="modal fade" id="centralModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title w-100" id="myModalLabel">{chosenPosts.title}</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <input id='input' type='text' onChange={(e)=>setTitle(e.target.value)} placeholder ={chosenPosts.title} ></input>
                                    <input id='input' type='text' onChange={(e)=>setBody(e.target.value)} placeholder={chosenPosts.body}></input>
                                    <div class="modal-body"></div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal"  href="#" className="btn btn-primary" type="button" onClick={SaveEdit} >save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* popUP  popUP popUP popUP popUP popUP popUP*/}


                


            </div>

        ))}
    </>)

})
//(e) => removePostHandler(chosenPosts)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostHistory);