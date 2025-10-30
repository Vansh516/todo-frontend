import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  let token = localStorage.getItem('token');
  console.log(token);

  let navigate = useNavigate();

  function handleLogout() {
    axios
      .post('http://localhost:9001/api/users/logout')
      .then(() => {
        localStorage.removeItem('token');
        navigate('/');
      })
      .catch((err) => {
        console.log('Error While Logout', err);
      });
  }

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>Notes App</div>

      <ul className={style.navMenu}>
        {token ? (
          <>
            <li>
              <button className={style.logoutbtn} onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
