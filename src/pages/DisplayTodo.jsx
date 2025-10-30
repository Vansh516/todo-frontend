import styles from './DisplayTodo.module.css';

const DisplayTodo = (props) => {
  const { allTodos, handleDeleteTodo, handleEditTodo } = props;

  return (
    <div className={styles.container}>
      {allTodos.length === 0 ? (
        <p className={styles.empty}>No Todos available</p>
      ) : (
        <>
          {allTodos.map((ele) => (
            <div key={ele._id} className={styles.todoCard}>
              <h4 className={styles.todoTitle}>{ele.title}</h4>
              <p className={styles.todoContent}>{ele.content}</p>
              <p className={styles.todoStatus}>Status: {ele.status}</p>

              <button
                className={`${styles.btn} ${styles.editBtn}`}
                onClick={() => handleEditTodo(ele._id)}
              >
                Edit
              </button>
              <button
                className={`${styles.btn} ${styles.deleteBtn}`}
                onClick={() => handleDeleteTodo(ele._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DisplayTodo;
