import React from 'react'
import { useState } from 'react'
import Card from './Card'
export default function Cards({items,handleClick}) {
 
  return (
    <div className="container">
      {
        items?.map((item,index) => (
          <Card key = {index} item = {item} id={index} handleClick={handleClick}/>
        ))
      }
    </div>
  )
}
