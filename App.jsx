import { useState } from 'react'
import './App.css'
import React from 'react'
// import ReactDOM from 'react-dom'
import { Heart } from './hearts'
import Header from './header'

import scribble from './images/scribble.png';

const hearts = [
  {id: 1, name: "heart", image: "./heart.png"},
  {id: 2, name: "scribble", image: "./scribble.png"}
]


function App() {
  const [broken, setIsBroken] = useState(false)
  const [headerBroken, setHeaderBroken] = useState(false)
  return (
    <div onClick = { () => {setIsBroken(!broken); setHeaderBroken(!headerBroken)} }>
      <div >
        {headerBroken ? <Header /> : <h1>HEAL</h1>}
        {broken ? <Heart /> : <img className="image" src={scribble} />}
      </div>
      {/* <HeartCard name={hearts[1].name} src={hearts[1].image} /> */}
    </div>
  )
}

export default App
