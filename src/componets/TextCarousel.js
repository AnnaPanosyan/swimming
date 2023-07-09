// 

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function TextCarousel({ feedback }) {

  return (
    <div>
      <Carousel showThumbs={false} showArrows={false} infiniteLoop autoPlay>
        {feedback.map((item, index) => (
          <div key={item.id}>
            <h2>{item.name}</h2>

            {item.stars.map((star,index) => {
              return(
                <span key={index}className="star">&#9733;</span>
              )
            }
              
        
      )}
            <p>{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TextCarousel;
