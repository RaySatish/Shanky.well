// ChatPage.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState('');
  const [username, setUsername] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const socket = io();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const usernameParam = params.get('username');
    const roomParam = params.get('room');

    setUsername(usernameParam);
    setRoom(roomParam);

    socket.emit('joinRoom', { username: usernameParam, room: roomParam });

    socket.on('roomUsers', ({ users }) => {
      setUsers(users);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('chatMessage', messageInput);
    setMessageInput('');
  };

  return (
    <div className="chat-container">
      <header className="chat-header bg-dark-color-a text-white p-4 flex justify-between items-center">
        <h1>
          <i className="fas fa-smile"></i> Shanky.well
        </h1>
        <a href="/" id="leave-btn" className="btn">
          Leave Room
        </a>
      </header>
      <main className="chat-main flex">
        <div className="chat-sidebar bg-dark-color-b text-white p-4 overflow-y-auto">
          <h3 className="text-lg">
            <i className="fas fa-comments"></i> Room Name:
          </h3>
          <h2 id="room-name">{room}</h2>
          <h3 className="text-lg">
            <i className="fas fa-users"></i> Users
          </h3>
          <ul id="users">
            {users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
        <div className="chat-messages p-4 flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="message p-4 mb-4 bg-light-color rounded">
              <p className="meta text-dark-color-b text-sm font-bold opacity-70">
                {message.username} <span>{message.time}</span>
              </p>
              <p className="text">{message.text}</p>
            </div>
          ))}
        </div>
      </main>
      <div className="chat-form-container bg-dark-color-a p-4">
        <form onSubmit={sendMessage} id="chat-form" className="flex">
          <input
            type="text"
            id="msg"
            placeholder="Enter Message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="form-input text-lg flex-1 mr-2"
          />
          <button type="submit" className="btn">
            <i className="fas fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;