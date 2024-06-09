import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './Components/Context';
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import countAtom from './store/atoms/count';

function App() {
  return (
    <>
    <Count/>    
    </>
  )
}



function Count(){
  console.log("rendered")
  return(
    <div>
      <RecoilRoot>
      <CountRenderer/> 
      <Buttons/>
      <Disp/>
      </RecoilRoot>
    </div>
  )
}
function CountRenderer(){
  console.log("renderer rerendered")
  const count=useRecoilValue(countAtom); //since we just need the value of the state we use this hook
  return( 
    <div>
      {count}
    </div>
  )
}
function Buttons(){
const setCount=useSetRecoilState(countAtom);
console.log("buttons rerendered");
 return(
  <div>
    <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count=>count-1)}}>Decrement</button>
  </div>
 )
}
function Disp(){
  const count=useRecoilValue(countAtom);
  const [text,setText]=useState("");
  useEffect(()=>{
    function changeText(){
      if(count%2==0){
        setText("It is even");
      }
      else setText("");
    }
    changeText();
  },[count]);  //useEffect only occurs for the first render. Doesnt work for subsequent renders.
  return(
    <div>
      {text}
    </div>
  )
}


export default App
