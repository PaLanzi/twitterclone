import "./App.css";
//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//import Form from "./Components/Form";
import Sidebar from "./Components/Sidebar";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "./Components/Searchbar";

function App() {
  const [messages, setMessages] = useState([]);
 // const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://minitwitter-hackaton.herokuapp.com/messages");
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
          // console.log(data);
          setLoading(false);
        } else {
          console.error("....? nothing is happen");
        }
      } catch (e) {
        // console.log(e.message);
        alert("Batman is coming!");
      }
    };
    fetchMessages();
  }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch("https://minitwitter-hackaton.herokuapp.com/users");
  //        if (res.ok) {
  //         console.log("We are here2!")
  //         const data = await res.json();
  //         setUsers(users);
  //         // console.log(users)
  //         setLoading(false);
  //       } else {
  //         console.error("....? nothing is happen");
  //       }
  //     } catch (e) {
  //       console.log(e.message);
  //       alert("Batman is coming!");
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  function handleSearchValue(value) {
    setSearchValue(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" src="./image16.png" />
        <p>HELLO</p>
        <div>
            <Searchbar />
          </div>
          <Post messages={messages} />
      </header>
      
    </div>
  );
}

export default App;

 {/* <p>{messages.map (message => <li key={message._id}>{message.message}</li>)}</p>
 {users.map (user => <li key={user._id}>{user.username}</li>)}</p> */}

 //exchange content of components - what is in Post should be in Posts and go from there
 