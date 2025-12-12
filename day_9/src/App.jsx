import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Stu_api'
function App() {
  const [slist, setSlist] = useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await api.get("/Student")
      setSlist(res.data)
      console.log(res.data)
    }
    fetchData()
  },[]
  )
  
  // npm-server -w data/db.json -p 3500
  return (
    <>
    {
      slist.map((s)=>
      <p key={s.sid}>{s.sid}-{s.sname}-{s.smark} - {s.dept}</p>
      )
    }
    
    </> 
  )
}

export default App