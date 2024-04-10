// ChatPage.js
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const socket = io("http://localhost:9000");

  useEffect(() => {
    const usernameParam = searchParams.get("username");
    const roomParam = searchParams.get("room");

    setUsername(usernameParam);
    setRoom(roomParam);

    socket.emit("joinRoom", { username: usernameParam, room: roomParam });

    socket.on("roomUsers", ({ users }) => {
      setUsers(users);
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, username]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chatMessage", messageInput);
    setMessageInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="p-4 bg-blue-500 text-white">
        <h1 className="font-bold text-xl">Shanky.well</h1>
        <a href="/home" className="text-sm text-white underline">
          Leave Room
        </a>
      </header>
      <main className="flex flex-grow">
        <div className="w-64 bg-blue-800 text-white p-4">
          <h3 className="font-bold text-lg mb-4">Room Name: {room}</h3>
          <h3 className="font-bold text-lg mb-4">Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                {user.username}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-white p-4 overflow-y-scroll">
          {messages.map((message, index) => (
            <div key={index} className="p-4 mb-4 bg-gray-200 rounded">
              <p className="text-sm text-gray-500 mb-2">
                {message.username} <span>{message.time}</span>
              </p>
              <p className="text-gray-800">{message.text}</p>
            </div>
          ))}
        </div>
      </main>
      <div className="p-4 bg-blue-500">
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            placeholder="Enter Message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-grow mr-2 py-2 px-4 rounded bg-white border-2 border-blue-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="py-2 px-4 rounded bg-white text-blue-500 font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
