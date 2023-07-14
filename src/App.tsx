import React from "react";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import "./App.css";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <br />
      <Profile />
      <hr />
      <br />

      <ShoppingList />
      <br />

      <MyButton />
    </div>
  );
};

export default App;
