import React from "react";
import { TbSwimming } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { kursPlan } from "../utilits/agbData";

const Kursplan = () => {
  const navigate = useNavigate();
  const handleLink = (e) => {
    e.preventDefault();
    navigate("/kursbuchen");
  };
  return (
    <div className="kursPlan">
      <div className="container">
        <h2>Kursplan</h2>
        {kursPlan.map((item) => (
          <div key={item.id} className="kursPlan_des">
            <h3 className="title">
              <TbSwimming className="icon" /> {item.title}
            </h3>
            <div className="info">
              <div className="kursInfo">
                <p className="info_item">{item.date}</p>
                <p className="info_item">{item.day}</p>
                <p className="info_item">{item.time1}</p>
                <p className="info_item">{item.time2}</p>
              </div>
              <button className="kursBtn" onClick={handleLink}>
                Kurs buchen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kursplan;
