import './App.css';
import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Login';
import * as Ably from "ably";
import { Realtime } from 'ably';

function App() {
    const [name,setName]=useState("");
    const [roomID,setRoomID]=useState("");
    const [userID,setUserID]=useState(uuidv4());
    
    const realtime = new Ably.Realtime({
        key: 'FtIjPg.UQJJXw:T3o8qffKWmVB-vLp3Pc-WqoJj07bXxNo_9n09bUxwJ4',
        clientId: userID }
    );
    const channel = realtime.channels.get('ape-yes-oat');
    channel.presence.subscribe('enter', function(member) {
        console.log('Member ' + member.clientId + ' entered');
    });
    //channel.presence.enter();

    channel.presence.subscribe('update',function(data){
        console.log(data);
    });
    function insertName(){
        channel.presence.update({username:'triet'});
    }
    function getMembers(){
        channel.presence.get(function(err,members){
            console.log("there are",members.length,"in this room");
            console.log(members);   
        });
    }

    channel.subscribe(`start_game_${roomID}`,()=>{
        console.log("let's start");
    });

    function start(){
        channel.publish(`start_game_${roomID}`,{});
    }

    return (
        <div className="App">
            {
                /*data.map((user,index)=>(
                    <p key={index}>{user.clientId}: {user.data}</p>
                ))*/
            }
            <input 
                placeholder='enter your room ID' 
                onChange={(event)=>setRoomID(event.target.value)}
            ></input>
            <button onClick={insertName}>click</button>
            <button onClick={getMembers}>get</button>
            <button onClick={start}>start</button>
        </div>
    );
}

export default App;
