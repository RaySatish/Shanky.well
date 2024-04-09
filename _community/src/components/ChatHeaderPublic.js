// ChatHeader.js
import React from 'react';

const ChatHeader = () => {
  return (
    <header className="chat-header bg-dark-color-a text-white p-4 flex justify-between items-center">
      <h1><i className="fas fa-smile"></i> Shanky.well</h1>
      <a href="http://localhost:3000/" id="leave-btn" className="btn">Leave Room</a>
    </header>
  );
};

export default ChatHeader;
