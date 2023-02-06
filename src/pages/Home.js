import React from "react";
import { useNavigate } from "react-router-dom";
import Popular from "../componets/Popular";

const Home = () => {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/kursbuchen");
  };
  return (
    <div>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">Swimming from zero to hero</h1>
            <button className="btn" onClick={handleLink}>
              Kurs buchen
            </button>
          </div>
        </div>
      </section>
      <Popular />
    </div>
  );
};

export default Home;
