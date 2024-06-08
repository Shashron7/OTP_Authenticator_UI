import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import './App.css'
import { CountContext } from './Components/Context';

function App() {
  const [count, setCount]=useState(0);
  //wrap anyone who wants to use the teleported value inside a Provider.
  return (
    <>
    <CountContext.Provider value={{count,setCount}}>
    <Count/>
    </CountContext.Provider>
    
    </>
  )
}


//prop drilling 

function Count(){
  const {count,setCount}=useContext(CountContext);

  return(
    <div>
      <CountRenderer/> 
      <Buttons/>
    </div>
  )
}
function CountRenderer(){
  const {count}=useContext(CountContext);
  return(
    <div>
      {count}
    </div>
  )
}
function Buttons(){
  const {count,setCount}=useContext(CountContext);
 return(
  <div>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
  </div>
 )
}


export default App
