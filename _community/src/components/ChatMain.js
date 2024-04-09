// ChatMain.js
import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatMessages from './ChatMessages';

const ChatMain = () => {
  return (
    <main className="chat-main">
      <ChatSidebar />
      <ChatMessages />
    </main>
  );
};

export default ChatMain;