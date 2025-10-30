import styles from './CreateTodo.module.css';

const CreateTodo = (props) => {
  const { title, setTitle, content, setContent, handleAddTodo } = props;

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddTodo} className={styles.form}>
        <h1>Create Todo</h1>

        <input
          type="text"
          placeholder="Enter Title..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Enter Content..."
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Add ✏️
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
