import "./App.css";
import logo from './logo.svg';
import React, { useState, useEffect } from "react";
//import { Routes, Route } from "react-router-dom";
//import Form from "./Components/Form";
//import Sidebar from "./Components/Sidebar";
//import Post from "./Components/Post";
//import Posts from "./Components/Posts";

function App() {
  const [messages, setMessages] = useState("");
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_YOBBQUQBY6trhgA9Up0JF0NkLEj1n`
        );
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setMessages(data.ip, data.location.city);
          console.log(data.ip, data.location.city);
          setLoading(false);
        } else {
          console.error("....? nothing is happen");
        }
      } catch (e) {
        console.log(e.message);
        alert("Batman is coming!");
      }
    };
    fetchMessages();
  }, []);

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" src="./image16.png" />
        <p>HELLO</p>
        <p>{messages}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
