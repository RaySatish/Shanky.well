import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios";

const Start = () => {
  const [disorders, setDisorders] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:9000/api/v1/disorder")
      .then((res) => {
        console.log(res.data);
        const dataArray = Object.values(res.data.data);
        console.log(dataArray);
        setDisorders(dataArray);
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <Header
        title={"Free Mental Health Assessments"}
        description={
          "Join our community and get access to exclusive content on mental wellness. Take a Free test and get Your Report."
        }
      />
      <div className="m-8 md:m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {disorders.map((disorder) => (
          <Card
            key={disorder.id}
            title={disorder.name}
            description={disorder.summary}
            imageSrc={""}
            to={`/quiz/${disorder.slug}`}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Start;
