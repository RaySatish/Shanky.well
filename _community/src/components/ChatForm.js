// ChatForm.js
import React from 'react';

const ChatForm = () => {
  return (
    <div className="chat-form-container bg-dark-color-a p-4">
      <form id="chat-form" className="flex">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autoComplete="off"
          className="flex-1 mr-2 px-2 h-10"
        />
        <button type="submit" className="btn"><i className="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  );
};

export default ChatForm;