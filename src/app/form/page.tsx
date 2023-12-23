'use client'
import { useState } from 'react';
import { sendEmail } from '../../utils/send-mail';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [kurse, setKurse] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Tu lógica de manejo del formulario aquí

    // Envía el correo de confirmación
    await sendEmail(email, name, kurse);
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
