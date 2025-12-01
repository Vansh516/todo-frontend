import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    let registerData = { name, email, password, phoneNumber };
    console.log(registerData);
    let resp = await axios.post(
      'https://todo-backend-4aeh.onrender.com/api/users/register',
      registerData
    );
    console.log(resp);

    if (resp.data.success) {
      alert(resp.data.message);
      navigate('/');
    } else {
      alert('Registeration Failed ❌');
    }
  }

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter Your phoneNumber"
          maxLength={10}
          minLength={10}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
