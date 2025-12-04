axios.defaults.withCredentials = true;

import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateTodo from './CreateTodo';
import DisplayTodo from './DisplayTodo';

const TodoWrapper = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('pending');
  const [editId, setEditId] = useState(null);

  const [allTodos, setAllTodos] = useState([]);

  const getAllTodos = async () => {
    try {
      let resp = await axios.get('https://todo-backend-4aeh.onrender.com/api/tasks/all');
      console.log(resp.data.data);
      setAllTodos(resp.data.data);
    } catch (error) {
      setAllTodos([]);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (title.trim() === '' && content.trim() === '') return;

    if (editId) {
      let resp = await axios.patch(
        `https://todo-backend-4aeh.onrender.com/api/tasks/edit/${editId}`,
        {
          title,
          content,
          status,
        },
        {
          withCredentials: true,
        }
      );
      console.log(resp);
      setEditId(null);
    } else {
      let newTodo = { title: title.trim(), content: content.trim() };

      let resp = await axios.post('https://todo-backend-4aeh.onrender.com/api/tasks/add', newTodo, {
        withCredentials: true,
      });
      console.log(resp);
    }

    setTitle('');
    setContent('');
    getAllTodos();
  };

  const handleDeleteTodo = (id) => {
    if (allTodos.length === 0) setAllTodos([]);

    axios
      .delete(`https://todo-backend-4aeh.onrender.com/api/tasks/delete/${id}`, {
        withCredentials: true,
      })
      .then((resp) => {
        console.log(resp);
        getAllTodos();
      });
  };

  const handleEditTodo = (id) => {
    const todoToEdit = allTodos.find((ele) => ele._id === id);
    console.log(todoToEdit);
    setTitle(todoToEdit.title);
    setContent(todoToEdit.content);
    setStatus(todoToEdit.status);
    setEditId(todoToEdit._id);
  };

  return (
    <div className="wrapper">
      <CreateTodo
        status={status}
        setStatus={setStatus}
        editId={editId}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleAddTodo={handleAddTodo}
      />
      <DisplayTodo
        allTodos={allTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default TodoWrapper;
