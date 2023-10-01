import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import Scores from './components/Scores'
import Room from './page/Room'
function App() {

  return (
    <>
     <div className="App">
      {/*  <div className="left-section">
          <Scores />
        </div>
        <div className="right-section">
          <h1>Memory Game - React</h1>
          <Cards />
  </div> */}
        <Room/>
        
        
     </div>
    </>
  )
}

export default App
