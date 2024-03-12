import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/NavHeader/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Amboss from './components/Pages/Amboss.jsx'
import Loading from './components/Loading/Loading.jsx'
import Amb from './components/QA/Amb.jsx'

export default function App() {
  const [arr, setArr] = useState(null)
  const [amb, setAmb] = useState(null)

  function update (a) {
    setAmb(a)
  }

  if (amb) {
    const data = import(`./components/Amboss/${amb}.jsx`)
    data.then((mod) => setArr(mod.default))
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='amboss' element={<Amboss update={update} />}/>
        <Route path={`amboss/${amb}`} element={arr && arr[0].info === amb ? <Amb data={arr}/> : <Loading/>}/>
        <Route path='*' element={<Home />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}