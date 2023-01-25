import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Checkbox, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { Link } from 'react-router-dom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const KursBuchen = () => {

  return (
    <div className="kursBuchen">
    <div className='container'>
      <h1>Kurs Buchen</h1>
     <>
     <Box
     className='box'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '26ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="filled-required"
          label="Familienname"
          defaultValue=""
          variant="filled"
        />
         <TextField
          required
          id="filled-required"
          label="Vorname (Kursteilnehmer)"
          defaultValue=""
          variant="filled"
        />
         </div>
        <div>
        <TextField
          id="filled-phone-input"
          label="Telefonnummer"
          type="number"
          variant="filled"
        />
        <TextField
          id="filled-email-input"
          label="E-Mail"
          type="email"
          autoComplete="current-email"
          variant="filled"
        />
         </div>

        <TextField
          id="filled-number"
          label="Alter (Kursteilnehmer)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        /> 
      

<Box sx={{ minWidth: 120, m:2}}>
      <FormControl fullWidth sx={{m:1}} >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Geschlecht
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'geschlecht',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>weiblich</option>
          <option value={20}>männlich</option>
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth sx={{m:1}}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Schwimmerfahrung
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'schwimmerfahrung',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>ohne Erfahrung</option>
          <option value={20}>wenig Erfahrung</option>
          <option value={30}>mit Erfahrung</option>
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth sx={{m:1}}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Kurse
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'kurse',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Anfänger Schwimmkursen</option>
          <option value={20}> Folge Schwimmkurs </option>
          <option value={30}>Bronze, Silber und Gold Schwimmkursen</option>
        </NativeSelect>
      </FormControl>
    </Box>
   <TextField
          id="filled-helperText"
          label="Nachricht"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
          style={{ maxWidth: 550,}}
        />
        <p className='text'> <b>Hinweis:</b> Nach dem Einsenden Ihrer Kontaktdaten erhalten Sie von 
          uns die Zahlungsmöglichkeiten per E-Mail.
        </p>
        <div className='daten'>
        <p>Wir verwenden Ihre Daten ausschließlich gemäß unserer</p>
        <Link to="/datenschutz">Datenschutzhinweise/-erklärung.</Link>
        </div>
        <div className='checkbox'>
      <Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      <Link to='/AGB'>
      <p>Ich akzeptiere di</p>
        Allgemeinen Geschäftsbedingungen (AGB)</Link>
    </div>
    </Box>
    <button className='btn'>Senden</button>
     </>    
    </div>
    </div>
  )
}




export default KursBuchen