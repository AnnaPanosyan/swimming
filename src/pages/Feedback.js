import React, { useState } from 'react'
import { Alert, Snackbar, TextField } from '@mui/material';
import { firestore } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';
import StarRating from '../componets/StarRating';

const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState('');
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [stars, setStars] = useState([1, 2, 3, 4, 5])

  const removeItem = (index) => {
    setStars(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, updatedItems.length);
      return updatedItems;
    });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    removeItem(newRating)
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const addFeedback = async (e) => {
    e.preventDefault();

    await addDoc(collection(firestore, "feedback"), {
      name: name,
      text: feedbackText,
      rating: rating,
      stars: stars,

    });
    setFeedbackText("")
    setName("")
    setRating(0)
    setStars([1, 2, 3, 4, 5])
  }

  return (
    <div className='feedback'>
      <div className="feedback__container" >
        <h2>Feedback</h2>
        <form onSubmit={addFeedback} className="form" >
          <div className="contactInput">
            <TextField
              required
              id="filled-required"
              label="Familienname"
              variant="filled"
              name="user_name"
              value={name}
              onChange={e => setName(e.target.value)}
              sx={{ m: 2 }} />
            <div>
              <StarRating rating={rating} onChange={handleRatingChange} />
              <p>{rating}</p>
            </div>
          </div>
          <textarea
            className="inputText"
            name="message"
            cols="70"
            rows="3"
            placeholder="Bitte hier eine Nachricht eingeben"
            value={feedbackText}
            onChange={e => setFeedbackText(e.target.value)}
          />
          <button type="submit" className="btn kontactBtn">
            Einreichen
          </button>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </form>
      </div>
    </div>
  );
}

export default Feedback


