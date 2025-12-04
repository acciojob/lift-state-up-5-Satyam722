import React, { useState } from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onLogin(); // Call parent function to update state
    }
  };

  return (
    <div>
      <h2>Please Login</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />

        <br /><br />

        <button type="submit" style={{ padding: "8px 16px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
