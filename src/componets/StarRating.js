import React from "react";

function StarRating({ rating, onChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <label key={star}>
          <input
            type="radio"
            name="rating"
            value={star}
            checked={star === rating}
            onChange={() => onChange(star)}
          />
          <span className="star">&#9733;</span>
        </label>
      ))}
    </div>
  );
}

export default StarRating;
