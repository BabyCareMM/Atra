// import { useState } from 'react';
// import { fetchPosts } from '../services/post';
// import { FetchPosts } from '../services/post';

// export default function Posts() {
//     const [s, setS] = useState();
//     async function clickme() {
//         try {
//             await FetchPosts()
//             setS(fetchPosts.map((post, index) => (
//                 <div key={post.id} className="card" style={{ 'width': '16rem', 'display': 'inline-block', 'margin': '5px' }}>
//                     <div className="card-body">
//                         <h6 className="title">{post.title}</h6>
//                         <p className="card-text">{post.body}</p>
//                     </div>
//                 </div>
//             )))
//         }
//         catch (err) {
//             console.log('err in component' + err)
//         }
//     }
//     return (<>
//         <button onClick={clickme}>click me</button>
//     </>)
// }
import { useState } from 'react';
import { FetchPosts } from '../services/post';
import { AddChosenPost } from '../services/post';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return { ...state, user: state.userReducer.user || [] }
}
const Posts = withRouter(function Posts(props) {
    const { history } = props;
    const [posts, setPosts] = useState([]);
    function clickme() {
        FetchPosts().then(res => {
            setPosts(res.data);
        });
    }
    function addPostHandler(e) {
        const post = {
            post_id: e.id,
            title: e.title,
            body: e.body,
            users: props.user.id
        }
        AddChosenPost(post);
        history.push('/postHistory');
    }

    return (<>
        <button onClick={clickme}>Click me</button>
        {posts.map((post, index) => (
            <div key={post.id} className="card" style={{ 'width': '16rem', 'display': 'inline-block', 'margin': '5px' }}>
                <div className="card-body">
                    <h6 className="title">{post.title}</h6>
                    <p className="card-text">{post.body}</p>
                    <button key={post.id} onClick={(e) => addPostHandler(post)} style={{ 'width': 'fitContent', 'textAlign': 'center' }} onClick={(e) => addPostHandler(post)} type="submit" class="fadeIn fourth">add post to favorits</button>
                </div>
            </div>
        ))}
    </>)
})
export default connect(
    mapStateToProps,
    null
)(Posts);