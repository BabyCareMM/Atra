import { useState } from "react";
import { connect } from "react-redux";
// import {GetUsersChosenPosts as chosenPostsService,myPosts} from '../services/post'
import {Parent} from '../services/post'

export default function PostHistory(props){
    const displayPosts = (props) =>{
        const myPostsList = props;

        if(myPostsList>0){
            return(
                <>
                {myPostsList.map((post,index) => {
                <div key={post._id} className="card" style={{'width': '16rem','display' : 'inline-block','margin' : '5px'}}>
                            {/* <img className="card-img-top" style={{'height': '16rem'}} src={item.Image} alt="Card image cap"/> */}
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <p className="card-text">{post.date}</p>
                                {/* <a href="#" className="btn btn-primary" onClick= {(e) =>clickHandler(item)}>Add To Basket</a> */}
                                <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" >Edit</button>
                                <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#centralModal" >Delete</button>
                            </div>
                </div>
                })}
                </>)
        }

        else{
            return(
                <h3>no posts yet </h3>
            )
        }

    }

// const user ={id:'602d19e26aa0f43a648261aa',
//             name: 'Meir',
//             email: 'meirroth@gmail.com',}//for trial

return(
    <>
    {displayPosts(props)}
    </>
)


    
}