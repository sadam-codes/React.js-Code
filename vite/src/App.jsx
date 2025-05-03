import React from 'react'
import Counter from './components/Counter'
import Props2 from './components/Props2'
import BgColor from './components/BgColor'
import GithubApi from './components/GithubApi'
import GithubAxios from './components/GithubAxios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './RoutingComponents/Home'
import About from './RoutingComponents/About'
import Contact from './RoutingComponents/Contact'
import Projects from './RoutingComponents/Projects'
import Header from './RoutingComponents/Header'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Projects />} />
        </Routes>
      </Router>
      <Props2 />
      <Counter />
      <GithubApi />
      <GithubAxios />
      <BgColor />
    </>
  )
}

export default App
