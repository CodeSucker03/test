import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Posts from "./Posts";
import PostForm from "./PostForm";

function App() {

  return (
    <>
      <Posts />
      <PostForm />
    </>
  );
}

export default App;
