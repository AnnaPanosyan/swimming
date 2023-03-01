import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const KursBuchen = () => {
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
        "service_sn9elzn",
        "template_7mrip0j",
        form.current,
        "tmD6DfLWRyEbl4efE"
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
    <div className="kursBuchen">
      <div className="container">
        <h1>Kurs Buchen</h1>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="kursBuchen_form">
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
            <TextField
              id="filled-number"
              label="Alter (Kursteilnehmer)"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              name="user_age"
              sx={{ m: 2 }}
            />
          </div>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Geschlecht
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              required
              inputProps={{
                name: "geschlecht",
                id: "uncontrolled-native",
              }}
            >
              <option value={"weiblich"}>weiblich</option>
              <option value={"männlich"}>männlich</option>
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Schwimmerfahrung
            </InputLabel>
            <NativeSelect
              required
              defaultValue={""}
              inputProps={{
                name: "schwimmerfahrung",
                id: "uncontrolled-native",
              }}
            >
              <option value={"ohne Erfahrung"}>ohne Erfahrung</option>
              <option value={"wenig Erfahrung"}>wenig Erfahrung</option>
              <option value={"mit Erfahrung"}>mit Erfahrung</option>
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Kurse
            </InputLabel>
            <NativeSelect
              required
              defaultValue={""}
              inputProps={{
                name: "kurse",
                id: "uncontrolled-native",
              }}
            >
              <option value={""}></option>
              <option value={"Anfänger Schwimmkursen/ am 23. April - 25. Juni/ von 17:00 - 17:45 Uhr"}>
                Anfänger Schwimmkursen / am 23. April - 25. Juni/ von 17:00 - 17:45 Uhr
              </option>
              <option value={"Anfänger Schwimmkursen// am 14. Mai - 16. Juli / von 15:00 - 15:45 Uhr"}>
                Anfänger Schwimmkursen / am 14. Mai - 16. Juli / von 15:00 - 15:45 Uhr
              </option>
              <option value={"Anfänger Schwimmkursen/ am 14. Mai - 16. Juli / von 16:00 - 16:45 Uhr"}>
                Anfänger Schwimmkursen / am 14. Mai - 16. Juli / von 16:00 - 16:45 Uhr
              </option>
              <option value={"Folge Schwimmkurs//am 14. Mai - 02. Juli/ von 17:00 - 17:45 Uhr"}>Folge Schwimmkurs /am 14. Mai - 02. Juli/ von 17:00 - 17:45 Uhr
              </option>
              <option value={"Bronze, Silber und Gold Schwimmkursen/ am 30. April - 18. Juni / von 18:00 - 18:45 Uhr"}>
                Bronze, Silber und Gold Schwimmkursen / am 30. April - 18. Juni / von 18:00 - 18:45 Uhr
              </option>
            </NativeSelect>
          </FormControl>
          <textarea
            className="inputText"
            name="message"
            cols="70"
            rows="5"
            placeholder="Bitte hier eine Nachricht eingeben"
          />
          <p className="text">
            <b>Hinweis:</b> Nach dem Einsenden Ihrer Kontaktdaten erhalten Sie
            von uns die Zahlungsmöglichkeiten per E-Mail.
          </p>
          <div className="daten">
            <p>Wir verwenden Ihre Daten ausschließlich gemäß unserer</p>
            <Link to="/datenschutz">Datenschutzhinweise/-erklärung.</Link>
          </div>
          <div className="checkbox">
            <Checkbox
              {...label}
              required
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              name="checkbox"
            />
            <span>
              Ich akzeptiere die
              <Link to="/AGB"> Allgemeinen Geschäftsbedingungen (AGB)</Link>
            </span>
          </div>
          <button className="btn" type="submit">
            Senden
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
};

export default KursBuchen;
