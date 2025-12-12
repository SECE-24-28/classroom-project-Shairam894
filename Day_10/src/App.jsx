import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { DataProvider } from './context/DataContext'
import { EditPost } from '../EditPost'

function App(){
 

  return (
    <>
    {/* <input type="text" placeholder='Search Posts' value={search} onChange={(e)=>Setsearch(e.target.value)}></input> */}
     <ol>
      <li> <Link to="/">Home</Link></li>
     <li><Link to="/addpost">AddPost</Link></li>

    </ol>
    
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
       <Route path="/addpost" element={<AddPost/>}></Route>
       <Route path="/editpost/:id"element={<EditPost/>}/>
      </Routes>
    {/* <Search ></Search>
    <AddPost />
    <Home ></Home> */}
    </DataProvider>
    </>
  )
}
export default App








// import { useEffect, useState } from 'react'
// import './App.css'
// import api from './api/Stu_api'
// function App() {
//   const [slist, setSlist] = useState([])
//   useEffect(()=>{
//     const fetchData=async()=>{
//       const res=await api.get("/Student")
//       setSlist(res.data)
//       console.log(res.data)
//     }
//     fetchData()
//   },[]
//   )
   // npm instll -g json-server
//   // npm-server -w data/db.json -p 3500
//   return (
//     <>
//     {
//       slist.map((s)=>
//       <p key={s.sid}>{s.sid}-{s.sname}-{s.smark} - {s.dept}</p>
//       )
//     }
    
//     </> 
//   )
// }

// export default App