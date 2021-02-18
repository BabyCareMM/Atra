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

export default function Posts() {
    const [posts, setPosts] = useState([]);
    function clickme() {
        FetchPosts().then(res => {
            setPosts(res.data);
        });
    }
    return (<>
        <button onClick={clickme}>Click me</button>
        {posts.map((post, index) => (
            <div key={post.id} className="card" style={{ 'width': '16rem', 'display': 'inline-block', 'margin': '5px' }}>
                <div className="card-body">
                    <h6 className="title">{post.title}</h6>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        ))}
    </>)
}