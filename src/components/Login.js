import React from "react";
import Input from "./Input.js";

export default function Login() {
  return (
    <>
      <div>
        <form className="form-login">
          <Input type="text" placeholder="username" />
          <Input type="text" placeholder="password" />
        </form>
        {/* <button>Login</button> */}
      </div>
    </>
  );
}
