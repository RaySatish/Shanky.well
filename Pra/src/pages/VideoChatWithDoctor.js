import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from '../components/NavBar';

const VideoChatWithDoctor = () => {
  const [chatMessages, setChatMessages] = useState([{ author: 'Chatbot', message: 'Welcome! How can I assist you today?' }]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  
  const doctorSchedules = {
    "Dr. Smith": ["10:00", "11:00", "13:00", "14:00"],
    "Dr. Johnson": ["09:00", "10:00", "15:00", "16:00"],
    "Dr. Garcia": ["08:00", "09:00", "12:00", "13:00"]
    // Add more doctors and their schedules as needed
  };

  const sendMessage = () => {
    const message = document.getElementById("input-msg").value;
    setChatMessages([...chatMessages, { author: 'You', message }]);
    document.getElementById("input-msg").value = "";
    handleResponse(message);
  };

  const handleResponse = (message) => {
    let response = '';
    if (message.toLowerCase().includes("doctor")) {
      response = "Please select a doctor from the list above.";
    } else if (message.toLowerCase().includes("hi") || message.toLowerCase().includes("hello")) {
      response = "Hello! How can I help you today?";
    } else if (message.toLowerCase().includes("stress") || message.toLowerCase().includes("anxiety")) {
      response = "Sure, I can help you with that. Here are some doctors you can chat with:";
      const doctorsList = Object.keys(doctorSchedules);
      response += doctorsList.map(doctor => `<br/><button onClick={() => selectDoctor("${doctor}")} class="doctor-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">${doctor}</button>`).join('');
    } else {
      response = "I'm sorry, I didn't understand that. Please try again.";
    }
    setChatMessages([...chatMessages, { author: 'Chatbot', message: response }]);
  };

  const selectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    const response = `You have selected ${doctor}. Please choose a time slot.`;
    setChatMessages([...chatMessages, { author: 'Chatbot', message: response }]);
  };

  const selectTime = (time) => {
    setSelectedTime(time);
    const response = `You have selected the meeting time: ${time}.`;
    const link = `https://meet.google.com/skr-yhji-wrp`;
    setMeetingLink(link);
    setChatMessages([...chatMessages, { author: 'Chatbot', message: response }]);
  };

  const joinMeeting = () => {
    window.open(meetingLink, '_blank');
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-8 m-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Video Chat with Doctor</h1>
      <div id="chatbot" className="text-left mb-4">
        {chatMessages.map((msg, index) => (
          <p key={index}><strong>{msg.author}:</strong> <span dangerouslySetInnerHTML={{ __html: msg.message }}></span></p>
        ))}
      </div>
      <div id="doctor-list" className="mb-4">
        <p className="font-bold mb-2">Select a doctor:</p>
        {Object.keys(doctorSchedules).map((doctor, index) => (
          <button key={index} onClick={() => selectDoctor(doctor)} className="doctor-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">{doctor}</button>
        ))}
      </div>
      <div className="schedule mb-4" id="schedule">
        {selectedDoctor && 
          <>
            <p>Schedule for {selectedDoctor}:</p>
            <ul className="time-slots">
              {doctorSchedules[selectedDoctor].map((time, index) => (
                <li key={index}><button className='time-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2' onClick={() => selectTime(time)}>{time}</button></li>
              ))}
            </ul>
          </>
        }
      </div>
      <div className="flex items-center mb-4">
        <input type="text" id="input-msg" className="input-field flex-1 p-2 border border-gray-300 rounded-lg mr-2" placeholder="Type your message..." />
        <button id="send-btn" className="send-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={sendMessage}>Send</button>
      </div>
      {meetingLink && 
        <div id="skr-yhji-wrp" className="text-center">
          <button className="join-meeting-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow-lg" onClick={joinMeeting}>Join the Meeting</button>
        </div>
      }
    </div>
    </>
  );
};

export default VideoChatWithDoctor;
