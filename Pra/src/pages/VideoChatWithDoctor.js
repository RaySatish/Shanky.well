import React, { useState } from 'react';

const VideoChatWithDoctor = () => {
  const [chatMessages, setChatMessages] = useState([{ author: 'Chatbot', message: 'Welcome! How can I assist you today?' }]);
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  
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
    } else {
      response = "I'm sorry, I didn't understand that. Please try again.";
    }
    setChatMessages([...chatMessages, { author: 'Chatbot', message: response }]);
  };

  const selectDoctor = () => {
    const checkboxes = document.getElementsByClassName("doctor-checkbox");
    const selectedDoctorsArray = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedDoctorsArray.push(checkboxes[i].value);
      }
    }
    setSelectedDoctors(selectedDoctorsArray);
    displaySchedule(selectedDoctorsArray[0]);
  };

  const displaySchedule = (doctor) => {
    const schedule = doctorSchedules[doctor];
    let scheduleHtml = "";
    if (schedule) {
      scheduleHtml = `<p>Schedule for ${doctor}:</p><ul>`;
      schedule.forEach(time => {
        scheduleHtml += `<li><button class='time-btn' onClick={() => selectTime("${time}")}>${time}</button></li>`;
      });
      scheduleHtml += "</ul>";
    } else {
      scheduleHtml = `<p>No schedule available for ${doctor}</p>`;
    }
    document.getElementById("schedule").innerHTML = scheduleHtml;
  };

  const selectTime = (time) => {
    setSelectedTime(time);
    const response = `You have selected the meeting time: ${time}.<br /><a href='https://meet.google.com/kmv-jsyv-juj' target='_blank'>Join Video Chat</a>`;
    setChatMessages([...chatMessages, { author: 'Chatbot', message: response }]);
  };

  return (
    <div className="container">
      <h1>Video Chat with Doctor</h1>
      <div id="chatbot">
        {chatMessages.map((msg, index) => (
          <p key={index}><strong>{msg.author}:</strong> {msg.message}</p>
        ))}
      </div>
      <div id="doctor-list">
        <p>Select a doctor:</p>
        <label className="doctor-item">
          <input type="checkbox" className="doctor-checkbox" value="Dr. Smith" />
          <span className="doctor-label"><span className="doctor-name">Dr. Smith</span> - Cardiology</span>
        </label>
        <label className="doctor-item">
          <input type="checkbox" className="doctor-checkbox" value="Dr. Johnson" />
          <span className="doctor-label"><span className="doctor-name">Dr. Johnson</span> - Pediatrics</span>
        </label>
        <label className="doctor-item">
          <input type="checkbox" className="doctor-checkbox" value="Dr. Garcia" />
          <span className="doctor-label"><span className="doctor-name">Dr. Garcia</span> - Dermatology</span>
        </label>
        {/* Add more doctors as needed */}
      </div>
      <div className="schedule" id="schedule">
        {/* Doctor schedule will be dynamically inserted here */}
      </div>
      <div id="time-selection">
        {/* Time selection buttons will be dynamically inserted here */}
      </div>
      <div style={{ display: 'flex' }}>
        <input type="text" id="input-msg" placeholder="Type your message..." />
        <button id="send-btn" onClick={sendMessage}>Send</button>
      </div>
      <div id="meet-link">
        {/* Google Meet link or meeting confirmation message will be dynamically inserted here */}
      </div>
    </div>
  );
};

export default VideoChatWithDoctor;
