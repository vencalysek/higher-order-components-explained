import React from "react";

import UserProfile from "./components/user-profile/user-profile.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProfile name="Vasek" email="vaseklysek@gmail.com" />
    </div>
  );
}

export default App;
