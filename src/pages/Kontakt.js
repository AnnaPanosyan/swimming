import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { TextField } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Kontact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLICK_KEY
      )
      .then(
        (result) => {
          result.text === "OK" && setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="kontact">
      <h2>Kontakt</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="contactInput">
          <TextField
            required
            id="filled-required"
            label="Familienname"
            defaultValue=""
            variant="filled"
            name="user_name"
            sx={{ m: 2 }}
          />
          <TextField
            required
            id="filled-required"
            label="Vorname (Kursteilnehmer)"
            defaultValue=""
            variant="filled"
            name="user_lastName"
            sx={{ m: 2 }}
          />
          <TextField
            id="filled-phone-input"
            label="Telefonnummer"
            type="tel"
            variant="filled"
            name="user_tel"
            sx={{ m: 2 }}
          />
          <TextField
            id="filled-email-input"
            label="E-Mail"
            type="email"
            autoComplete="current-email"
            variant="filled"
            name="user_email"
            sx={{ m: 2 }}
          />
        </div>
        <textarea
          className="inputText"
          name="message"
          cols="70"
          rows="5"
          placeholder="Bitte hier eine Nachricht eingeben"
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
  );
};

export default Kontact;
