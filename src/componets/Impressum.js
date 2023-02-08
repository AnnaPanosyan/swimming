import React from "react";
import { impressumData } from "../utilits/agbData";

const Impressum = () => (
  <div className="impressum">
    <div className="container">
      <div className="impressum_title">
        <h2>Impressum</h2>
      </div>

      <div className="contacts">
        <p className="title"> Angaben gemäs § 5 TMG </p>
        <p className="linkTitle">Swimming From Zero to Hero</p>
        <p className="linkTitle">Arno Setaghyan</p>
        <p className="linkTitle">Steinmickerweg 6</p>
        <p className="linkTitle">59505 Bad Sassendorf</p>
        <p className="links">
          <a href="tel:+ 49 17624310872" className="phone">
            Mobil: + 49 17624310872
          </a>
          <a href="mailto:swimmzerotohero@gmail.com" className="email">
            Email: swimmzerotohero@gmail.com
          </a>
        </p>
      </div>

      <div className="impressum_contant">
        {impressumData.map((item) => (
          <div key={item.id} className="impressum_item">
            <h4 className="impressum_subtitle">{item.title}</h4>
            <p className="impressum_text">{item.text}</p>
            <p className="impressum_text">{item.subText}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Impressum;
