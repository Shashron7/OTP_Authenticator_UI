import React, { useEffect, useRef, useState, useTransition } from "react";
import './Page2.css';
import NumberAtom from "./Atom";
import { useRecoilValue } from "recoil";


export default function Page2() {
  const inputRefs = useRef([]);
  const [val, setVal]=useState(true);
  const [num, setNum]=useState("");
  const number=useRecoilValue(NumberAtom);
  console.log("The number is ",number)
  //The whole component 
  useEffect(() => {
    const handleInput = (e) => { // function definition
      const target = e.target;
      const val = target.value;

      if (isNaN(val)) {
        target.value = "";
        return;
      }

      if (val !== "") {
        const next = target.nextElementSibling;
        setNum(prevNum => prevNum + val);

        if (next) {
          next.focus();
        }
      }
    };

    const handleKeyUp = (e) => {  // function definition
      const target = e.target;
      const key = e.key.toLowerCase();

      if (key === "backspace" || key === "delete") {
        const newNum = num.slice(0, -1);
        setNum(newNum);
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
          prev.focus();
        }
      }
    };

    const inputs = inputRefs.current;
    inputs.forEach(input => {
      input.addEventListener("input", handleInput);
      input.addEventListener("keyup", handleKeyUp);
    });
    
    // Clean up the event listeners when the component unmounts or when `num` changes
    return () => {
      inputs.forEach(input => {
        input.removeEventListener("input", handleInput);
        input.removeEventListener("keyup", handleKeyUp);
      });
    };
  }, [num]);

  // Enable the button when num length is 4
  useEffect(() => {
    if (num.length === 4) {
      setVal(false);
      console.log(num)
    } else {
      setVal(true);
    }
  }, [num]);

  return (
    <div>
      <div className="container">
        <div id="inputs" className="inputs">
          {[...Array(4)].map((_, i) => (
            <input
              key={i}
              ref={el => inputRefs.current[i] = el}
              className="input"
              type="text"
              inputMode="numeric"
              maxLength="1"
            />
          ))}
        </div>
        <button disabled={val}>Submit OTP</button>
      </div>
    </div>
  );
}
