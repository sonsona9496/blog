import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="contianer">
                <div className='footer-icon'><Link to='/'>Blog</Link></div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="posts">All Post</NavLink></li>
                    <li><NavLink className='add-post'  to="add-post">Add Post</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
