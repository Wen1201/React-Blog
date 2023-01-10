import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80" alt="" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Safak</b></span>
                <span className='singlePostDate'>1 hour ago</span>    
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, dignissimos totam, doloribus voluptates reiciendis quam fugit alias autem aut perferendis mollitia et vel accusamus quasi repudiandae excepturi aliquam quaerat. Iure!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, dignissimos totam, doloribus voluptates reiciendis quam fugit alias autem aut perferendis mollitia et vel accusamus quasi repudiandae excepturi aliquam quaerat. Iure!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, dignissimos totam, doloribus voluptates reiciendis quam fugit alias autem aut perferendis mollitia et vel accusamus quasi repudiandae excepturi aliquam quaerat. Iure!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, dignissimos totam, doloribus voluptates reiciendis quam fugit alias autem aut perferendis mollitia et vel accusamus quasi repudiandae excepturi aliquam quaerat. Iure!</p>
        </div>
    </div>
  )
}
