import React from 'react';
import Navbar from '../components/NavBar';

function About() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto p-8">
      {/* Module 1: Mental Health Support */}
      <div className="module bg-gradient-to-r from-blue-500 to-gray-700 rounded-lg p-8 text-white mb-8">
        <h2 className="text-3xl font-bold mb-4">Mental Health Support</h2>
        <p className="text-lg mb-4">Empowering students with personalized assessments, professional counseling services, and additional features.</p>
        <button className="button bg-white text-blue-500 py-2 px-4 rounded-lg mr-4" onClick={takeAssessment}>Take Assessment</button> {/* Link to assessment page */}
        <button className="button bg-white text-blue-500 py-2 px-4 rounded-lg">Learn More</button> {/* Link to learn more page */}
        <div className="decorative-line h-px bg-white bg-opacity-25 my-8"></div> {/* Decorative line */}
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Personalized Assessments</h3>
            <p>Assess various aspects of mental health, such as stress, anxiety, and depression, tailored to individual needs.</p>
          </div>
          <div className="feature bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Professional Counseling</h3>
            <p>Schedule confidential counseling sessions with qualified professionals via video chat or in-person, ensuring personalized support.</p>
          </div>
          <div className="feature bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Resource Library</h3>
            <p>Access a comprehensive library of articles, videos, and resources on mental health and well-being.</p>
          </div>
        </div>
      </div>

      {/* Module 2: Hostel Management Integration */}
      <div className="module bg-gradient-to-r from-blue-500 to-gray-700 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Hostel Management Integration</h2>
        <p className="text-lg mb-4">Streamlining health tracking and proactive measures within the hostel environment.</p>
        <button className="button bg-white text-blue-500 py-2 px-4 rounded-lg mr-4">Take Assessment</button> {/* Link to assessment page */}
        <button className="button bg-white text-blue-500 py-2 px-4 rounded-lg">Learn More</button> {/* Link to learn more page */}
        <div className="decorative-line h-px bg-white bg-opacity-25 my-8"></div> {/* Decorative line */}
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Real-time Health Data Exchange</h3>
            <p>Automatically transmit health records from hospitals to hostel wardens for prompt identification of sick students.</p>
          </div>
          <div className="feature bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Proactive Health Management</h3>
            <p>Implement preventive measures, such as quarantine protocols and enhanced sanitation, to curb the spread of illnesses within the hostel community.</p>
          </div>
          <div className="feature bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Emergency Response</h3>
            <p>Establish emergency response protocols and communication channels to address health crises effectively.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function takeAssessment() {
  // Redirect to the assessment page
  window.location.href = "assessment.html";
}

export default About;