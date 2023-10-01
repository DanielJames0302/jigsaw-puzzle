import React from 'react'
import '../styles/player.css'
export default function Player({player}) {
  return (
    <div className='player-tag'>
      <img className='thumbnail' src={player.img} alt="" />
      <p className='player-name'>{player.name}</p>
      <p className='player-points'>{player.point}</p>
    </div>
  )
}
