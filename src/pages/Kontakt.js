import React from 'react';
import { Link } from 'react-router-dom';

const Kontact = () => {
  return (
    <form className='kontact'>
      <div className='container'>
        <div className='kontact_container'>
          <h1>Kontakt</h1>
          <div className='input'>
            <input type="text" placeholder='Vorname' />
            <input type="text" placeholder='Nachname' />
          </div>
          <div className='input'>
            <input type='email' placeholder='E-Mail-Adresse' />
            <input type="tel" placeholder='Telefon' />
          </div>
          <div >
            <input className='inputText' type="text" size="50" placeholder='Bitte hier eine Nachricht eingeben' />
          </div>
          <div>
            <Link className="btn">Einreichen</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Kontact;
