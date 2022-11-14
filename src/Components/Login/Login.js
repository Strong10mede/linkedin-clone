import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  return (
    <div className="login">
      <div className="login">
        <img
          src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
          alt="Linkedin main logo"
        />

        <form>
          <input
            placeholder="Full name (required for register)"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Profile pic URL (optional)"
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
