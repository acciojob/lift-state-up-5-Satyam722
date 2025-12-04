import React, { useState } from "react";
import Login from "./Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <h2>You are logged in</h2>
      )}
    </div>
  );
}
