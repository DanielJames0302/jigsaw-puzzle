import React from 'react'
import { useState } from 'react'
import Player from './Player'

export default function Scores({players}) {
 /* const [player, setPlayer] = useState([
    {img: '/img/js.png', name: "MinhMan",point:0},
    {img: '/img/js.png', name: "NhatHuy",point: 0},
    {img: '/img/js.png', name: "MinhTriet", point:0},
    {img: '/img/js.png', name: "AnhTuan", point:0}
  ])*/ 
  return (
    <div className="score-table">
      {players?.map((player,index) =>(
        <Player key={index} player = {player} />
      ))}
    </div>
  )
}
