import React from 'react'
import headerImg from '../images/header-img.jpg'

import { Link } from 'react-router-dom'
import Post from './Post'
function Home({posts , path}) {
    
    const displayPost = posts.map(post =>(
        <Post title={post.title} desc={post.desc} img={post.img} key={post.id} path={path} />
    ))
    return (
        <div className='cont'>
            <div className="header">
                <div className="header-img">
                    <img src={headerImg} alt="header img"  />
                </div>
                <div className="header-content">
                    <span className='header-caption'>developer</span>
                    <h2 className='header-title'>News Needs to Meet Its Audiences Where They Are</h2>
                    <p className='header-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?
                    </p>
                    <Link className='header-btn' to={path}>read more</Link>
                </div>
            </div>
            <div className="posts">
                {displayPost}
            </div>
        </div>
    )
}

export default Home
