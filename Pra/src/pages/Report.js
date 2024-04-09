import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Report() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const value = searchParams.get("value");
  const [disorder, setDisorder] = useState({});
  const [intensity, setIntensity] = useState("");

  const navigate = useNavigate();

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

  useEffect(() => {
    if (value) {
      let intensityLevel = "";
      if (value >= 1 && value <= 20) {
        intensityLevel = "Mild";
      } else if (value >= 21 && value <= 40) {
        intensityLevel = "Moderate";
      } else if (value >= 41 && value <= 60) {
        intensityLevel = "Moderate to Severe";
      } else if (value >= 61 && value <= 80) {
        intensityLevel = "Severe";
      } else if (value >= 81 && value <= 105) {
        intensityLevel = "Very Severe";
      }
      setIntensity(intensityLevel);
    }
  }, [value]);

  const handleClick = () => {
    navigate(`/consult`);
  };

  return (
    <>
      <Navbar />
      <Header title={disorder.name} description={disorder.description} />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold mb-4">
            Disorder: {disorder.name} <br /> Intensity Level: {intensity} <br />{" "}
            Your Score: {value}
          </p>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Consult
          </button>
        </div>
        <div className="bg-gray-100 shadow-md rounded-lg p-6">
          <p className="text-lg font-semibold mb-4">Intensity Ranges:</p>
          <ul className="list-disc list-inside">
            <li>Mild: 1-20</li>
            <li>Moderate: 21-40</li>
            <li>Moderate to Severe: 41-60</li>
            <li>Severe: 61-80</li>
            <li>Very Severe: 81-105</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Report;
