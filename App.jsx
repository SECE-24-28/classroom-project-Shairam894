import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let city="Kovai"
  let nums=[11,22,33]

  return(
    <>
      <p>I am from {city}</p>
      <p>Lucky Numbers:{[10,20,30]}</p>
      <p>{"true or false"}</p>
      <p>{JSON.stringify({name:"Rohit",age:40})}</p>

    </>
  )
}

export default App
