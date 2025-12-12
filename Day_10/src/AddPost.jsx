import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import './AddPost.css'


const AddPost = () => {
    const{title,setTitle,body,setBody,handleSubmit}=useContext(DataContext);
  return (

        <div className="addpost-container">
  <form className="addpost-form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      placeholder="Body"
      value={body}
      onChange={(e) => setBody(e.target.value)}
    />

    <button type="submit">Save</button>
  </form>


    </div>
  )
}

export default AddPost