import "./App.css";
//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//import Form from "./Components/Form";
import Sidebar from "./Components/Sidebar";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_YOBBQUQBY6trhgA9Up0JF0NkLEj1n`
        );
 //       if (res.ok) {
          if (true) {
          console.log("We are here!")
          const data = await res.json();
          setMessages([
            {
              "_id": "622a5745649d2c097abd999ß89",
              "message": "Hello Tanja",
              "createdAt": "2022-03-10T19:53:41.778Z",
              "updatedAt": "2022-03-10T19:53:41.778Z",
              "__v": 0
            },
            {
              "_id": "622a5745649d2c097abd890ß0ß9",
              "message": "Hola Tanja",
              "createdAt": "2022-03-10T19:53:41.778Z",
              "updatedAt": "2022-03-10T19:53:41.778Z",
              "__v": 0
            },
            {
              "_id": "622a5745649d2c097abd890ß0",
              "message": "Bonjour Tanja",
              "createdAt": "2022-03-10T19:53:41.778Z",
              "updatedAt": "2022-03-10T19:53:41.778Z",
              "__v": 0
            }
          ]);
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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_YOBBQUQBY6trhgA9Up0JF0NkLEj1n`
        );
 //       if (res.ok) {
          if (true) {
          console.log("We are here!")
          const data = await res.json();
          setUsers([
              {
                "_id": "622c69d95b23ea17c4af05e1",
                "username": "user1",
                "avatar": "https://ozgrozer.github.io/100k-faces/0/2/002035.jpg",
                "v": 0
              },
              {
                "_id": "622c6bcf96704a12931af403",
                "username": "cHaSiNgWaVeS",
                "avatar": "https://ozgrozer.github.io/100k-faces/0/8/008174.jpg",
                "v": 0
              }
          ]);
          setLoading(false);
        } else {
          console.error("....? nothing is happen");
        }
      } catch (e) {
        console.log(e.message);
        alert("Batman is coming!");
      }
    };
    fetchUsers();
  }, []);

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" src="./image16.png" />
        <p>HELLO</p>
      <p>{messages.map (message => <li key={message._id}>{message.message}</li>)}</p>
      <p>{users.map (user => <li key={user._id}>{user.username}</li>)}</p>
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
