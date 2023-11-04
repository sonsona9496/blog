import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {LiaEditSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom'
function Post({img , title , desc , key ,path}) {
  return (
    <div className="post-card" key={key}>
        <img className='post-img' src={img} alt="" />
        <div className="info">
            <span>31-10-2023</span>
            <div className="action">
                <button className='btn-del'><AiOutlineDelete/></button>
                <button className='btn-edit'><LiaEditSolid/></button>
            </div>
        </div>
        <div className="post-content">
          <h3 className='post-title'><Link to={path}>{title}</Link></h3>
          <p className='post-desc'>{desc}</p>
        </div>
    </div>
  )
}

export default Post
