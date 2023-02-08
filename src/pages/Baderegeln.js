import React from "react";
import { baderegeln } from "../utilits/agbData";

const Baderegeln = () => (
  <div className="baderegeln">
    <div className="container">
      <div className="baderegeln_title">
        <h2>Baderegeln</h2>
      </div>
      <div className="baderegeln_contant">
        {baderegeln.map((item) => (
          <div key={item.id} className="baderegeln_item">
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Baderegeln;
