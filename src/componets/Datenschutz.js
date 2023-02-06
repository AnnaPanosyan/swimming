import React from "react";
import { datenschutzData } from "../utilits/datenschutzData";

const Datenschutz = () => {
  return (
    <div className="datenschutz">
      <div className="container">
        <div className="datenschutz_title">
          <h2>Datenschutz</h2>
        </div>
        <div className="datenschutz_contant">
          {datenschutzData.map((item) => (
            <div key={item.id} className="datenschutz_item">
              <h4 className="datenschutz_subtitle">{item.title}</h4>

              {item.text.map((i, index) =>
                typeof i === "string" ? (
                  <p key={index} className="datenschutz_text">
                    {i}
                  </p>
                ) : (
                  <div key={index}>
                    <span>{i.name}</span>
                    <a href={i.link} className="phone">
                      {i.link}
                    </a>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
