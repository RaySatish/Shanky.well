// JoinPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleJoinChat = () => {
    if (username.trim() !== "") {
      // Check if username is not empty or only whitespace
      navigate(`/chat/chatpage?username=${username}&room=${room}`);
    } else {
      alert("Please enter a username."); // Show an alert if username is empty
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="room"
          >
            Room
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="Adverse Children Experience">
              Adverse Children Experience
            </option>
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
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              username.trim() === "" ? "cursor-not-allowed opacity-50" : ""
            }`}
            type="button"
            onClick={handleJoinChat}
            disabled={username.trim() === ""} // Disable button if username is empty
          >
            Join Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
