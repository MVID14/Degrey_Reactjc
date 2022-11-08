import React from 'react'
import './app.css'
import Home from './components/Home/Home'
// import Main from './components/Main/Main'
import Navbar from "./components/Navbar/Navbar.jsx"

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Main/> */}
    </>
  )
}

export default App