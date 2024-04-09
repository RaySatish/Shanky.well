// import { useState } from "react";

// function Question({ question, index }) {
//   const [selectedOption, setSelectedOption] = useState();

//   const handleChange = (e) => {
//     setSelectedOption(Number(e.target.value));
//   };

//   return (
//     <div className="questionBox">
//       <p className="question">{question}</p>
//       <div className="optionBox">
//         <span className="agreeText">Agree</span>
//         {[1, 2, 3, 4, 5, 6, 7].map((value) => (
//           <input
//             key={value}
//             type="radio"
//             className={`opt${value}`}
//             value={value}
//             name={`question${index + 1}`}
//             onChange={handleChange}
//           />
//         ))}
//         <span className="disagreeText">Disagree</span>
//       </div>
//     </div>
//   );
// }

// export default Question;

// import { useState } from "react";

// function Question({ question, index }) {
//   const [selectedOption, setSelectedOption] = useState();

//   const handleChange = (e) => {
//     setSelectedOption(Number(e.target.value));
//   };

//   return (
//     <div className="questionBox">
//       <p className="question">{question}</p>
//       <div className="optionBox">
//         <span className="agreeText">Agree</span>
//         {[1, 2, 3, 4, 5, 6, 7].map((value) => (
//           <input
//             key={value}
//             type="radio"
//             className={opt${value}}
//             value={value}
//             name={question${index + 1}}
//             onChange={handleChange}
//           />
//         ))}
//         <span className="disagreeText">Disagree</span>
//       </div>
//     </div>
//   );
// }

// export default Question;

import React from "react";

function Question({ question, index, setSelectedOptions, selectedOptions }) {
  const handleChange = (e) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: Number(e.target.value),
    }));
  };

  return (
    <div className="questionBox">
      <p className="question">{question}</p>
      <div className="optionBox">
        <span className="disagreeText">Disagree</span>
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <input
            key={value}
            type="radio"
            className={`opt${value}`}
            value={value}
            name={`question${index + 1}`}
            onChange={handleChange}
            checked={selectedOptions[index] === value}
          />
        ))}
        <span className="agreeText">Agree</span>
      </div>
    </div>
  );
}

export default Question;
