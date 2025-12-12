import { useContext } from "react";
import DataContext from "./src/context/DataContext";
import { useParams } from "react-router-dom";
export const EditPost=()=>
{
    const{posts,handleDelete}=useContext(DataContext)
    const{id}=useParams()
    const post=posts.find((p)=>p.id==id)
    if(!post)
        return(
    <div>
        <h1>There is no data....</h1>
    </div>)
    return(
    <div>
        <h1>Edit Post</h1>
        <hr />
        <input type='text' value={post.title} /> <br />
        <textarea value={post.body} />
        <br />
        <button onClick={()=>handleDelete(post.id)}>Delete</button>
    </div>
)
}
