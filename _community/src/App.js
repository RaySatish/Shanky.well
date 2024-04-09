import React from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMain from './components/ChatMain';
import ChatForm from './components/ChatForm';
import JoinHeader from './components/JoinHeader';
import JoinMain from './components/JoinMain';
import SocketComponent from './components/SocketComponent';

const App = () => {
  // Set state to determine whether to show chat or join components
  const [showChat, setShowChat] = React.useState(false);

  return (
    <div className="App">
      {/* Socket Component */}
      <SocketComponent />

      {/* Conditional rendering based on showChat state */}
      {showChat ? (
        <>
          {/* Chat Components */}
          <ChatHeader />
          <ChatMain />
          <ChatForm />
        </>
      ) : (
        <>
          {/* Join Components */}
          <JoinHeader />
          <JoinMain />
        </>
      )}

      {/* Button to toggle between chat and join components */}
      <div className="text-center mt-4">
        <button
          onClick={() => setShowChat(!showChat)}
          className="btn bg-dark-color-a hover:bg-dark-color-b text-white py-2 px-4 rounded"
        >
          {showChat ? 'Join Chat' : 'Back to Chat'}
        </button>
      </div>
    </div>
  );
};

export default App;
