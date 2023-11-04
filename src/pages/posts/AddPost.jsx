import React from 'react'


function AddPost() {
    return (
        <div className="cont">
            <div className='form-container'>
                <h1 className='form-heading'>add post</h1>
                <form>
                    <div className="mb-3 form-title" >
                        <label>title</label>
                        <input type="text" placeholder="Enter title post" />
                    </div>
                    <div className="mb-3 form-textarea" >
                        <label>description</label>
                        <textarea  name="desc" id="desc"  rows="10"></textarea>
                    </div>
                    <button type='button' className='form-btn'>add post</button>
                </form>
            </div>
        </div>
    )
}

export default AddPost
