import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        <div className="postInfo">
            <div className="postCats">
               <span className="postCat">Music</span>
               <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem, ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sapiente adipisci assumenda modi cupiditate consequuntur non expedita molestiae. Neque consequatur quia aspernatur adipisci qui soluta tenetur ipsa vitae recusandae eius.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sapiente adipisci assumenda modi cupiditate consequuntur non expedita molestiae. Neque consequatur quia aspernatur adipisci qui soluta tenetur ipsa vitae recusandae eius.
        </p>
    </div>
  )
}
