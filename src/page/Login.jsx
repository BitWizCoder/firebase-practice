import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmaiAndPassword, signInWithGoogle } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginWithEmaiAndPassword(email, password);
      navigate("/home");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  };

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home");
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
      <form className="flex flex-col">
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
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-200 rounded-sm"
          />
        </div>
        <button
          className="bg-black text-white p-1 rounded-md m-auto"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-blue-500 text-white p-1 rounded-md m-auto"
          type="submit"
          onClick={handleSocialLogin}
        >
          Login with Google
        </button>
      </form>
      <p className="my-2">
        Don't Have an Account?{" "}
        <NavLink to={"/register"} className="underline">
          Register
        </NavLink>{" "}
      </p>
      <p className="my-2">
        Forgot Password?{" "}
        <NavLink to={"/reset"} className="underline">
          Reset
        </NavLink>{" "}
      </p>
    </div>
  );
}
