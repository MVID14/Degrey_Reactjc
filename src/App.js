import React from 'react'
import './app.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home.jsx'
import Main from './components/Main/Main.jsx'
import Navbar from "./components/Navbar/Navbar.jsx"
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App