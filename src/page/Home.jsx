import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Home() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed Out");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (loading) return <p>User info loading..</p>;
  return (
    <>
      <div>Welcome, {user.email}</div>
      <button
        className="bg-black text-white rounded p-1"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
