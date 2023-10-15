import React, { useState } from "react";
import "./styles.css";
import Login from "./components/Login";
import Result from "./components/Result";
import Card from "./components/Card";
import Register from "./components/Register";

export default function App() {
  // const [ogCount, setCount] = useState(0);
  // const [isRegistered, setIsRegistered] = useState(true);
  // const [showCard, setShowCard] = useState(false);

  // function changeState() {
  //   setCount(ogCount + 1);
  // }

  // function addCard() {
  //   setShowCard(true);
  //   console.log("clicked");
  // }

  // const [time, uptime] = useState("Time");

  // function currenttime() {
  //   let time_string = new Date().toLocaleTimeString();
  //   uptime(time_string);
  // }

  // function closetime() {
  //   uptime("time");
  // }

  const [heading, setheading] = useState("Hello");

  const [buttonstyle, setbuttonstyle] = useState({
    backgroundColor: "white",
    color: "black"
  });

  // const[mouseout,setmousout] = useState(false)

  function changeheading() {
    setheading("welcome");
  }

  function changebuttonstyle() {
    setbuttonstyle({
      backgroundColor: "black",
      color: "white"
    });
  }

  function changeback() {
    setbuttonstyle({
      backgroundColor: "white",
      color: "black"
    });
  }

  return (
    <>
      {/* <div className="App">
        {isRegistered && <Register />}
        {ogCount}
        <button onClick={changeState}>+</button>
      </div>

      <div className="card-adding">
        <button onClick={addCard}>Add Note</button>
        {showCard && <Card />}
      </div>
      <div className="gettime">
        <button onClick={currenttime}>{time}</button>
        <button onClick={closetime}>close</button>
      </div> */}
      <div>
        <h1>{heading}</h1>
        <Login />
        <button
          className="btn"
          onClick={changeheading}
          style={buttonstyle}
          onMouseOver={changebuttonstyle}
          onMouseOut={changeback}
        >
          click here
        </button>
      </div>
    </>
  );
}
