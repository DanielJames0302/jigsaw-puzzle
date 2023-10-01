import React from 'react'
import { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Login() {
  const [user,setUser] = useState({username:"", roomid:""})
  function handleChange(event) {
    const {name,value,type} = event.target;
    setUser(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  function handleSubmit(event) {
    alert(`${user.username} ${user.roomid}`)
    event.preventDefault();
  }
  return (
    
    <form className='form-container' onSubmit={handleSubmit}>
        <h1>MEMORY GAME</h1>
        <input 
          type='text' 
          placeholder='Your Name'
          onChange={handleChange}
          name="username"
          value={user.name}
        />
      <input 
        type='text'
        placeholder='Room ID'
        onChange={handleChange}
        name="roomid"
        value={user.id}
       />
       <Link to="/room">
       <button className='play-button'>PLAY</button>
       </Link>
       
    </form>
  )
}
