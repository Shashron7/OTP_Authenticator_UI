import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import NumberAtom from './Atom'
import { useSetRecoilState, useRecoilState } from "recoil";




export default function LandingPage() {
  const [num, setNum] = useRecoilState(NumberAtom);
  const navigate=useNavigate();
  function isPureNumber(value) {  //checks if the number entered is valid or not 
    return typeof value === "number" && !isNaN(value) && value<=9999999999 && value>=1000000000;
  }
  function SendOTP() {
    if (!isPureNumber(num)) alert("Enter valid Indian number");
    console.log("Pressed", num);
    axios.post('http://localhost:3000/submitOTP',
        {
            number: num  
        }
    )
    .then(response=>{
        console.log(response.data);
        navigate('/check');
    })
    .catch(error=>{
        console.error("Error sending data", error);
    })
  }

  return (
    <div>
      <input
        placeholder="Enter your Mobile number"
        style={{ fontSize: "20px", padding: "20px" }}
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      ></input>
      <button onClick={SendOTP}>Send OTP</button>
    </div>
  );
}
