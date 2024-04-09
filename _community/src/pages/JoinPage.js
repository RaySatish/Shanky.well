// JoinPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const handleJoinChat = (e) => {
    e.preventDefault();
    history.push(`/chat?username=${username}&room=${room}`);
  };

  return (
    <div className="join-container max-w-md mx-auto mt-20 text-white">
      <header className="join-header text-center bg-dark-color-a p-4 rounded-tl-lg rounded-tr-lg">
        <h1>
          <i className="fas fa-smile"></i> Shanky.well
        </h1>
      </header>
      <main className="join-main bg-dark-color-b p-6 rounded-bl-lg rounded-br-lg">
        <form onSubmit={handleJoinChat}>
          <div className="form-control mb-4">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label htmlFor="room" className="block mb-1">
              Room
            </label>
            <select
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="form-select"
            >
              <option value="Adverse Children Experience">Adverse Children Experience</option>
              <option value="ADHD">ADHD</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Clinical Anger">Clinical Anger</option>
              <option value="Depression">Depression</option>
              <option value="OCD">OCD</option>
              <option value="Prolonged Grief">Prolonged Grief</option>
              <option value="PTSD">PTSD</option>
              <option value="Relationship">Relationship</option>
            </select>
          </div>
          <button type="submit" className="btn w-full">
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
};

export default JoinPage;
