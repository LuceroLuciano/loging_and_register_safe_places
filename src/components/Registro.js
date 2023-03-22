import React, { useState } from 'react';

const Registro = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre de usuario:', usuario);
    console.log('Contraseña:', password);
    /*
    fetch('/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario, password })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); */
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario:</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;