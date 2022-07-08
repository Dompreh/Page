import React, { useEffect } from "react";
import "./Page.css";
import page from "./image/page.jpg";
import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Page() {
  const background = {
    backgroundImage: `url(${page})`,
  };
  const [prev, setPrev] = useState("");
  const [current, setCurrent] = useState("");
  const [input, setInput] = useState("$");
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (total ) {
      setPrev("");
    }


    current
      ? setCurrent((prev) => prev + e.target.innerText)
      : setCurrent(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    if (setInput(current) > 2560){
        setInput("$ ");
        input("$ ");
    }else{
        setInput(current);
    } 
  }, [current]);
  useEffect(() => {
    setInput("$ ");
  }, []);

  const reset = (e) => {
    setPrev("")
    setCurrent("")
    input("")
  };

  return (
    <div className="page">
      <div className="leftside" style={background}></div>
      <div className="rightside">
        <div className="page-display">
          <ArrowBackIosNewIcon className="page-arrow" />
          <h4>Carrot</h4>
          <h3>How much do you want to take?</h3>
          <p>Enter an amount</p>
          <input
            autoFocus="autoFocus"
            value={input}
            placeholder="$"
            // onChange={setInput}
            type="numbers"
            className="page-entry"
          />
          <p className="pageLimit">
            <span>Max:</span> $2,500.00
          </p>
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="btn" onClick={inputNum}>
              1
            </div>
            <div className="btn" onClick={inputNum}>
              2
            </div>
            <div className="btn" onClick={inputNum}>
              3
            </div>
            <div className="btn" onClick={inputNum}>
              4
            </div>
            <div className="btn" onClick={inputNum}>
              5
            </div>
            <div className="btn" onClick={inputNum}>
              6
            </div>
            <div className="btn" onClick={inputNum}>
              7
            </div>
            <div className="btn" onClick={inputNum}>
              8
            </div>
            <div className="btn" onClick={inputNum}>
              9
            </div>
            <div onClick={inputNum}></div>
            <div className="btn" onClick={inputNum}>
              0
            </div>
            <KeyboardBackspaceIcon className="btn left_arrow" onClick={reset} />
          </div>
          <button className="pagebtn">Request Amount</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
