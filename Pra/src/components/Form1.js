import HeaderX from "./HeaderX";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const questions = [
  "How often do you experience feelings of worry or apprehension?",
  "Rate your ability to cope with stressful situations.",
  "How frequently do you feel tense or on edge?",
  "Rate your tendency to overthink or dwell on past events.",
  "How often do you experience physical symptoms such as headaches or muscle tension due to stress?",
  "Rate your difficulty in falling or staying asleep due to worries.",
  "How frequently do you avoid certain situations or activities due to fear or anxiety?",
  "Rate your tendency to experience sudden panic attacks.",
  "How often do you feel overwhelmed by daily tasks or responsibilities?",
  "Rate your tendency to seek reassurance from others when feeling anxious.",
  "How frequently do you experience racing thoughts or difficulty concentrating when stressed?",
  "Rate your tendency to engage in behaviors such as nail-biting or pacing when anxious.",
  "How often do you experience gastrointestinal issues like stomachaches or nausea due to stress?",
  "Rate your tendency to anticipate negative outcomes or catastrophize situations.",
  "How frequently do you experience intrusive thoughts or images related to stressful events?",
  "Rate your difficulty in relaxing or unwinding after a stressful day.",
  "How often do you experience changes in appetite or eating habits during periods of stress?",
  "Rate your tendency to avoid confronting situations or problems that cause anxiety.",
  "How frequently do you experience irritability or mood swings when stressed?",
  "Rate your overall mood and sense of well-being.",
];

function FooterX({ onSubmit }) {
  return (
    <div className="footerX">
      <button className="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default function Form({ title }) {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Answers:", answers);
    navigate("/result", { state: { answers } });
  };

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const allQuestionsAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="app">
      <HeaderX
        title="Anxiety"
        description="Anxiety is a persistent feeling of unease, worry, or fear that can range
                from mild to severe and can interfere with daily life activities. It
                often involves excessive thinking about future events or situations,
                accompanied by physical symptoms like sweating, trembling, or rapid
                heartbeat."
      />
      {questions.map((el, i) => (
        <Question key={i} question={el} index={i} onChange={handleChange} />
      ))}
      {allQuestionsAnswered && <FooterX onSubmit={handleSubmit} />}
    </div>
  );
}

function Question({ question, index, onChange }) {
  const handleChange = (e) => {
    onChange(index, Number(e.target.value));
  };

  return (
    <div className="questionBox">
      <p className="question">{question}</p>
      <div className="optionBox">
        <span className="agreeText">Agree</span>
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <input
            key={value}
            type="radio"
            className={`opt${value}`}
            value={value}
            name={`question${index + 1}`}
            onChange={handleChange}
          />
        ))}
        <span className="disagreeText">Disagree</span>
      </div>
    </div>
  );
}
