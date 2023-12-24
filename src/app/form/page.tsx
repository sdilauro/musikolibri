'use client'
import axios from 'axios';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [kurse, setKurse] = useState('');
    
  const handleSubmit = async () => {
    try {
      await axios.post('/api/sendEmail', { email, name, kurse });
      alert('Correo electrónico enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      alert('Error al enviar el correo electrónico');
    }
  };
  

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Correo Electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Nombre:
          <input type="string" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Curso:
          <input type="string" value={kurse} onChange={(e) => setKurse(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HomePage;
