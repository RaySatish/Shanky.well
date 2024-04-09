// ChatSidebar.js
import React from 'react';

const ChatSidebar = () => {
  return (
    <div className="chat-sidebar bg-dark-color-b text-white p-4 overflow-y-scroll">
      {/* Room Name */}
      <h3><i className="fas fa-comments"></i> Room Name:</h3>
      <h2 id="room-name">JavaScript</h2>
      
      {/* Users */}
      <h3><i className="fas fa-users"></i> Users</h3>
      <ul id="users">
        <li>Brad</li>
        <li>John</li>
        <li>Mary</li>
        <li>Paul</li>
        <li>Mike</li>
      </ul>
    </div>
  );
};

export default ChatSidebar;