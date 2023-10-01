import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'
import Scores from './components/Scores'
import Room from './page/Room'
import LoginPage from './page/LoginPage'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
       <div className="App">
      
        <Switch>
          <Route exact path='/' >
            <LoginPage/>
          </Route>
          <Route path = '/room'>
            <Room/>
          </Route>
        </Switch>
       
        
        
     </div>
    </Router>
  )
}

export default App
