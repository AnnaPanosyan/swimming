import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popular from "../componets/Popular";
import { firestore } from "../Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import TextCarousel from "../componets/TextCarousel";

const Home = () => {
  const [feedback, setFeedback] = useState([]);


  const navigate = useNavigate();
  useEffect(() => {
    const q = query(collection(firestore, 'feedback'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let feedbackArray = []
      querySnapshot.forEach((doc) => {
        feedbackArray.push({
          ...doc.data(),
          id: doc.id,
        });
      })
      setFeedback(feedbackArray)
    })
    return () => unsub()
  }, [])
  const handleLink = () => {
    navigate("/kursbuchen");
  };
  const handleLinkFeedback = () => {
    navigate("/feedback");
  };
  return (
    <div className="home__page">
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">Swimming From Zero To Hero</h1>
            <button className="btn" onClick={handleLink}>
              Kurs buchen
            </button>
          </div>
        </div>
      </section>
      <div className="feedbacks">
        <div className="feedback_title">
          <h2 className='title'>EUER FEEDBACK IST UNS WICHTIG:</h2>
          <button className="btn" onClick={handleLinkFeedback}>Jetzet bewerten
          </button>
        </div>
        <TextCarousel feedback={feedback} />
      </div>
      <Popular />
    </div>
  );
};

export default Home;
