import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GetUsersChosenPosts as chosenPostsService, removePost as removePostService, AddChosenPost } from '../services/post'

// import {Parent} from '../services/post'
const mapStateToProps = (state) => {
    return { ...state, user: state.userReducer.user || [] }
}

const PostHistory = withRouter(function PostHistory(props) {
    const { history } = props;
    const user = {
        _id: "602bf8e1d2f6343c4004092f",
        name: "Minds",
        email: "lemindy43@gmail.com",
        password: "333333"
    }
    const [post, setPost] = useState([]);

    function viewChosenPost() {
        chosenPostsService(user).then(res => {
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

        AddChosenPost()

    }
    function redirectHandler() {
        history.push('/posts');
    }
    return (<>
        <input onClick={(e) => redirectHandler(e)} type="submit" class="fadeIn fourth" value="Back to posts" />
        <br />
        <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" onClick={viewChosenPost}>Click here to see chosen posts</button>
        {post.map((chosenPosts, index) => (
            <div key={chosenPosts._id} className="card" style={{ 'width': '16rem', 'height': '25rem', 'display': 'inline-block', 'margin': '5px' }}>
                <div className="card-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => removePostHandler(chosenPosts)}><span aria-hidden="true">&times;</span></button>
                    <h5 className="title">{chosenPosts.title}</h5>
                    <p className="card-text">{chosenPosts.body}</p>
                    <p className="card-text">Added to collection on : {chosenPosts.date}</p>
                    <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" onClick={(e) => editPostHandler(chosenPosts)}>Edit</button>

                </div>


                {/* popUP  popUP popUP popUP popUP popUP popUP*/}

                {/* popUP  popUP popUP popUP popUP popUP popUP*/}
            </div>

        ))}
    </>)

})
//(e) => removePostHandler(chosenPosts)
export default connect(
    mapStateToProps,
    null
)(PostHistory);