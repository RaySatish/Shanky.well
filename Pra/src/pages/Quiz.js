// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Header from "../components/Header";
// import Navbar from "../components/NavBar";
// import Question from "../components/Question";
// import Footer from "../components/Footer";

// function Quiz() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const id = searchParams.get("id");
//   const [disorder, setDisorder] = useState({});
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     if (id && disorder.questions) {
//       setQuestions(disorder.questions);
//     }
//   }, [disorder, id]);

//   useEffect(() => {
//     axios
//       .get(`http://127.0.0.1:9000/api/v1/disorder/${id}`)
//       .then((res) => {
//         setDisorder(res.data.data); // Assuming res.data contains the disorder object
//       })
//       .catch((err) => {
//         alert(err.response.data);
//       });
//   }, [id]);

//   return (
//     <>
//       <Navbar />
//       <Header title={disorder.name} description={disorder.description} />
//       {questions.map((el, i) => (
//         <Question key={i} index={i} question={el} />
//       ))}
//       <Footer />
//     </>
//   );
// }

// export default Quiz;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Question from "../components/Question";
import Footer from "../components/Footer";

function Quiz() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [disorder, setDisorder] = useState({});
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id && disorder.questions) {
      setQuestions(disorder.questions);
    }
  }, [disorder, id]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:9000/api/v1/disorder/${id}`)
      .then((res) => {
        setDisorder(res.data.data); // Assuming res.data contains the disorder object
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [id]);

  function calculateStressLevel(selectedOptions) {
    let stressLevel = 0;

    for (const option of Object.values(selectedOptions)) {
      stressLevel += option;
    }

    return stressLevel;
  }

  const handleSubmit = () => {
    const value = calculateStressLevel(selectedOptions);
    navigate(`/report?id=${id}&value=${value}`);
  };

  const isSubmitDisabled = questions.some(
    (question, index) => !selectedOptions[index]
  );

  return (
    <>
      <Navbar />
      <Header title={disorder.name} description={disorder.description} />
      {questions.map((el, i) => (
        <Question
          key={i}
          index={i}
          question={el}
          setSelectedOptions={setSelectedOptions}
          selectedOptions={selectedOptions}
        />
      ))}
      <div className="flex justify-center my-12">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:pointer-events-none"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Quiz;
