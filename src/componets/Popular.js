import React from "react";
import { data } from "../utilits/data";
import PopularPage from "./PopularPage";

const Popular = () => (
  <section className="popular">
    <div className="container">
      <div className="popular_section">
        <h2 className="secTitle">Wir bieten Folgende schwimmkurse an</h2>
      </div>
      <div className="mainContent">
        {data.map((item) => {
          return (
            <PopularPage
              key={item.id}
              imgSrc={item.imgSrc}
              destTitle={item.destTitle}
              number={item.number}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default Popular;
