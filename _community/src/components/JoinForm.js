// JoinForm.js
import React from 'react';

const JoinForm = () => {
  return (
    <main className="join-main p-4 bg-dark-color-b">
      <form action="chat.html">
        <div className="form-control mb-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username..."
            required
            className="w-full px-2 h-10"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="room">Room</label>
          <select name="room" id="room" className="w-full px-2 h-10">
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="C#">C#</option>
            <option value="Ruby">Ruby</option>
            <option value="Java">Java</option>
          </select>
        </div>
        <button type="submit" className="btn w-full">Join Chat</button>
      </form>
    </main>
  );
};

export default JoinForm;