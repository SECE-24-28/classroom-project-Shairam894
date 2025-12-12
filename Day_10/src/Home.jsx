import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Search from './Search'
import { Link } from 'react-router-dom'

const Home = () => {
  const{searchResult}=useContext(DataContext)
  return (
    <>
      <Search />
    <div>
        {
      searchResult.map((p)=>
        <div key={p.id}>
          {/* <h2>{p.id}</h2> */}
        <Link to={`/editpost/${p.id}`}>
          <h3>{p.title}</h3>
          <p>{p.datetime}</p>
          <p>{p.body}</p>
      
          <hr></hr>
             </Link>
        </div>
      )
    }
    </div>
    </>
  )
}

export default Home