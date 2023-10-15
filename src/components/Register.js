import React from "react";
import Input from "./Input.js";

export default function Register() {
  return (
    <>
      <div>
        <form className="form-login">
          <Input type="text" placeholder="username" />
          <Input type="text" placeholder="password" />
          <Input type="text" placeholder="Confirm password" />
        </form>
        <button>Register</button>
        {/* <button>+</button> */}
      </div>
    </>
  );
}
