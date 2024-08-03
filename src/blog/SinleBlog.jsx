import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';

const SinleBlog = () => {
    const [blog , setBlog] = useState(blogList);
    const {id} = useParams()
    console.log(id);
  return (
    <div>
        Single Blog
    </div>
  )
}

export default SinleBlog
