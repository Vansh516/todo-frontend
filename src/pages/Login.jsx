import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    let loginData = { email, password };
    console.log(loginData);
    try {
      let resp = await axios.post(
        'https://todo-backend-4aeh.onrender.com/api/users/login',
        loginData,
        {
          withCredentials: true,
        }
      );
      console.log(resp);
      if (resp.data.success) {
        alert(resp.data.message);
        localStorage.setItem('token', resp.data.data);
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
      // alert(error.response.data.message);
    }
  }

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleLogin}>
        <h1>Welcome Back</h1>

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

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
