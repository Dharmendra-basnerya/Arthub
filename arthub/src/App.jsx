//import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/home'
import Navbar from './components/Navnar'
import axios from "axios"

//import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  useEffect(()=>{
    axios.get("/api").then(()=>console.log("backend connected")).catch((err)=>console.log("something went wrong ", err))
  })
  // const  router = createBrowserRouter([
  //   {
  //     path:'/Home',
  //     element:<Home/>
  //   },
  //   {
  //     path:'/About',
  //     element:<About/>
  //   },{
  //     path:'/Help',
  //     element:<Help/>
  //   }
  // ])

  return <center>
    <Header></Header>
  <Home></Home>
  <Navbar></Navbar>

  <RouterProvider router={router}/>
  </center>
}

export default App;
