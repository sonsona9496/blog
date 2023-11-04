import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css';
function Navbar() {
    return (
        <nav>
            <div className="contianer">
                <div className='logo'><Link  to='/'>Blog</Link></div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink end to="posts">All Posts</NavLink></li>
                    <li><NavLink className='add-post' to="posts/add-post">Add Post</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
