import React from 'react'
import Post from '../Post'

function AllPosts({posts , path}) {
    const displayPost = posts.map(post =>(
        <Post title={post.title} desc={post.desc} img={post.img} key={post.id} path={path} />
    ))
    return (
        <div className='cont'>
            <div className="posts">
                {displayPost}
            </div>
        </div>
    )
}

export default AllPosts
