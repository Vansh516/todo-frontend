import style from './Home.module.css';
import TodoWrapper from './TodoWrapper';
const Home = () => {
  return (
    <div className={style.container}>
      <TodoWrapper />
    </div>
  );
};

export default Home;
