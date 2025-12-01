import styles from './CreateTodo.module.css';

const CreateTodo = (props) => {
  const { title, setTitle, content, setContent, handleAddTodo, editId, status, setStatus } = props;
  console.log('Status', status);

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddTodo} className={styles.form}>
        <h1>{editId ? 'Update Todo' : 'Create Todo'}</h1>

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

        {editId && (
          <div className={styles.status}>
            <input
              type="checkbox"
              value={status}
              id="status"
              checked={status === 'completed' ? true : false}
              onChange={(e) => {
                if (e.target.checked) {
                  setStatus('completed');
                } else {
                  setStatus('pending');
                }
              }}
            />
            <label htmlFor="status">Status</label>
          </div>
        )}

        <button type="submit" className={styles.button}>
          {editId ? 'Update ✅' : 'Add ✏️'}
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
