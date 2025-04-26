import React from 'react'
import Counter from './components/Counter'
import Props2 from './components/Props2'
import BgColor from './components/BgColor'
import GithubApi from './components/GithubApi'
import GithubAxios from './components/GithubAxios'

const App = () => {
  return (
    <>
      <Props2/>
      <Counter />
      {/* <BgColor/> */}
      <GithubApi/>
      <GithubAxios/>
    </>
  )
}

export default App
