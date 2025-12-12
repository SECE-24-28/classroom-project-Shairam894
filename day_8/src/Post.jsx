import React from 'react'

const Post=()=>{
    const{id}=useParams()
    return(
        <div>Post-{id}</div>
    )
}
export default Post