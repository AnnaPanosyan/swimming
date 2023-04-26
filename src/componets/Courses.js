import React, { useEffect, useState } from "react";
import {
  AiFillClockCircle,
  AiFillEuroCircle,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { TbSwimming } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../utilits/data";
import { BsCheck2All } from "react-icons/bs";

const Courses = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cours, setCours] = useState(null);

  useEffect(() => {
    setCours(data.filter((item) => item.id == id)[0]);
  }, [id]);

  const handleLink = () => {
    navigate("/kursbuchen");
  };
  return (
    <div>
      {cours && (
        <section className="courses" key={id}>
          <div className="container">
            <div className="courses_section">
              <h2 className="secTitle">Wir bieten folgende Schwimmkurse an</h2>
              <div>
                <div className="courses_description">
                  <div className="description">
                    <h2 className="courses_title">{cours.destTitle}</h2>
                    <span>{cours.age}</span>
                    <div className="amenities">
                      <div className="singleAmenity">
                        <AiFillClockCircle className="icon" />
                        <span>{cours.duration1}</span>
                        {/* <span>{cours.duration2}</span> */}
                      </div>
                      <div className="singleAmenity">
                        <AiFillEuroCircle className="icon" />
                        <span>{cours.preis1}</span>
                      </div>
                      <div className="singleAmenity">
                        {cours.lessons && <TbSwimming className="icon" />}
                        <span>{cours.lessons}</span>
                      </div>
                      <div className="singleAmenity">
                        {cours.kids ?<><AiOutlineUsergroupAdd className="icon" /> <span>{cours.kids}</span></>:<><AiFillClockCircle className="icon" /> 
                        <span>{cours.duration2}</span>
                        <span></span>
                        <AiFillEuroCircle className="icon" />
                        <span>{cours.preis2}</span>
                       </>}
                      </div>
                      
                    </div>
                    {cours.kids?<button className="btn" onClick={handleLink}>
                      Kurs buchen
                    </button>:"Alle Termine müssen per E-Mail oder telefonisch vereinbart werden."}
                    
                  </div>
                  <div className="destImage">
                    <img src={cours.imgSrc} alt="title" />
                  </div>
                </div>
                <div className="about_cours">
                  <h2 className="courses_title">Über diesen Kurs</h2>
                  {cours.description.map((item, index) => (
                    <div key={index}>
                      <p>{item.about}</p>
                      <div className="courses_rule">
                        <h2 className="courses_title">{item.subTitle}</h2>
                        <ul className="courses_list">
                          {item.rouls.map((item, index) => (
                            <li key={index} className="courses_item">
                              <BsCheck2All className="icon" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default Courses;
