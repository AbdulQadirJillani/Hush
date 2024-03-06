import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/NavHeader/Layout.jsx'
import Home from './components/Home/Home.jsx'
import FirstYear from './components/Pages/FirstYear.jsx'
import SecondYear from './components/Pages/SecondYear.jsx'
import ThirdYear from './components/Pages/ThirdYear.jsx'
import Loading from './components/Loading/Loading.jsx'
import QA from './components/QA/QA.jsx'

export default function App() {
  const [arr, setArr] = useState(null)
  const [sem, setSem] = useState(null)
  const [name, setName] = useState(null)
  const [year, setYear] = useState(null)

  function update (s, n, y) {
    setSem(s)
    setName(n)
    setYear(y)
  }

  if (sem && name && year) {
    const data = import(`./components/PastPapers/${sem}/${name}/${name}-${year}.jsx`)
    data.then((mod) => setArr(mod.default))
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='1st-year' element={<FirstYear update={update} />}/>
        <Route path='2nd-year' element={<SecondYear update={update} />}/>
        <Route path='3rd-year' element={<ThirdYear update={update} />}/>
        <Route path={`${sem}/${name}/${year}`} element={arr && arr[0].info === `${sem}/${name}/${year}` ? <QA data={arr}/> : <Loading/>}/>
        <Route path='*' element={<Home />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}