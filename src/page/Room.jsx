import React, { useEffect } from 'react'
import Cards from '../components/Cards'
import Scores from '../components/Scores'
import { useState } from 'react'
import '../styles/room.css'
import {images} from '../data/images'
export default function Room() {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(images.sort(()=> Math.random()-0.5));
  },[images])

  console.log(items);
  const [players, setPlayer] = useState([
  {img: '/thumbnails/emoji.png', name: "MinhMan",point:0},
  {img:  '/thumbnails/emoji.png', name: "NhatHuy",point: 0},
  {img:  '/thumbnails/emoji.png', name: "MinhTriet", point:0},
  {img:  '/thumbnails/emoji.png', name: "AnhTuan", point:0}])

const [prev, setPrev] = useState(-1)

function check(current) {
  if (items[current].id === items[prev].id) {
    items[current].stat = "correct"
    items[prev].stat = "correct"
    setItems([...items])
    players[0].point += 1
    setPlayer([...players])
    setPrev(-1)
  } else {
    items[current].stat = "wrong"
    items[prev].stat = "wrong"
    setItems([...items])
    setTimeout(() => {
      items[current].stat = ""
      items[prev].stat = ""
      setItems([...items])
      setPrev(-1)
    },1000)
  }
}
function handleClick(id) {
  items[id].stat = "active"
  setItems([...items])
  if (prev === -1) {
    items[id].stat = "active"
    setItems([...items])
    setPrev(id)
  }else {
    check(id)
  }
}

  return (
    <div className="room-page">
      <div className="left-section">
        <h1>Memory Game - React</h1>
        <Cards items ={items} handleClick={handleClick} />
      </div>
      <div className="right-section">
        <Scores players ={players}/>
      </div>
    
    </div>
  )
}
