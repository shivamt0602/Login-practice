import React from "react";
// import Input from "./Input.js";

export default function Input(props) {
  return (
    <>
      <div>
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
}
