import React, { useState } from 'react';

export default function RegistrationForm() {
  const [name, setName] = useState(''), [email, setEmail] = useState(''), [age, setAge] = useState('');
  const [nameErr, setNameErr] = useState(''), [emailErr, setEmailErr] = useState(''), [ageErr, setAgeErr] = useState('');
  const [success, setSuccess] = useState(false);

  const vName = v => !v || v.length < 2 ? 'Min 2 chars' : '';
  const vEmail = v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Invalid email' : '';
  const vAge = v => !v || Number(v) < 18 ? 'Must be >= 18' : '';

  const handleSubmit = e => {
    e.preventDefault();
    const ne = vName(name), ee = vEmail(email), ae = vAge(age);
    setNameErr(ne); setEmailErr(ee); setAgeErr(ae);
    
    if (!ne && !ee && !ae) {
      setSuccess(true); setName(''); setEmail(''); setAge('');
    } else setSuccess(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {success && <p style={{color: 'green'}}>Registration successful!</p>}
      <div>
        <input value={name} onChange={e => { setName(e.target.value); setNameErr(vName(e.target.value)); }} placeholder="Name" />
        {nameErr && <p style={{color:'red'}}>{nameErr}</p>}
      </div>
      <div>
        <input value={email} onChange={e => { setEmail(e.target.value); setEmailErr(vEmail(e.target.value)); }} placeholder="Email" />
        {emailErr && <p style={{color:'red'}}>{emailErr}</p>}
      </div>
      <div>
        <input type="number" value={age} onChange={e => { setAge(e.target.value); setAgeErr(vAge(e.target.value)); }} placeholder="Age" />
        {ageErr && <p style={{color:'red'}}>{ageErr}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}