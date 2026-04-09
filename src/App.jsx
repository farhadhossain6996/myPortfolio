import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/pages/Home'
import { Routes,Route } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'

import Error from './components/Error'
import AboutMe from './components/pages/AboutMe'
import MyPortfolio from './components/pages/MyPortfolio'
import MyServices from './components/pages/MyServices'
import ContectMe from './components/ContectMe'
import Skills from './components/pages/Skills'
import Frontend from './components/Frontend'
import Projects from './components/pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Routes>
<Route  path= "/" element ={<RootLayout/>}>

<Route  path= "/" index element ={<Home/>}/>
<Route path="aboutme" element ={<AboutMe/>}/>
<Route path="myPortfolio" element ={<MyPortfolio/>}/>
<Route path="skills" element={<Skills/>}/>
<Route path="frontend" element={<Frontend/>}/>
<Route path="myServices" element={<MyServices/>}/>
<Route path="projects" element={<Projects/>}/>
<Route path="contectMe" element={<ContectMe/>}/>

<Route path="*" element = {<Error/>}/>


</Route>


 </Routes>
    </>
  )
}

export default App
