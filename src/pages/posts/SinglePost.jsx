import React from 'react'
import headerImg from '../../images/header-img.jpg'
function SinglePost() {
  return (
    <div className='cont'>
      <div className=" single-post">
        <div className="single-post-img">
            <img src={headerImg} alt="header img"  />
        </div>
        <div className="single-post-content">
            <span className='single-post-caption'>developer</span>
            <h2 className='single-post-title'>News Needs to Meet Its Audiences Where They Are</h2>
            <p className='single-post-desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?
            </p>
            <p className='single-post-desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?
            </p>
            <p className='single-post-desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?
            </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
