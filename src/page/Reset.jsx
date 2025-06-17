import React, { useState } from "react";
import { sendPasswordReset } from "../firebase";
import { NavLink } from "react-router-dom";

export default function Reset() {
  const [email, setEmail] = useState("");

  const hanldeReset = () => {
    sendPasswordReset(email);
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset your password</h1>
      <div className="my-1">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email adress"
          className="mx-2 my-2 p-1 border border-gray-200 rounded-sm"
        />
        <button
          className="bg-black text-white p-1 rounded-sm"
          onClick={hanldeReset}
        >
          Reset Password
        </button>
      </div>

      <p className="my-2">
        Don't Have an Account?{" "}
        <NavLink to={"/register"} className="underline">
          Register
        </NavLink>{" "}
      </p>
    </div>
  );
}
