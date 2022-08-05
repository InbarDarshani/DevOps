import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TasksList from './components/TaskList';
import axios from './utils/axios'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const getTasks = useCallback(() => {
    axios.get(`/api/tasks`)
      .then(res => setTasks(res.data));
  }, []);

  useEffect(() => {
    getTasks();
  }, []);

  const clickAddTask = event => {
    event.preventDefault();
    axios.post(`/api/tasks/add`, { title: newTaskTitle })
      .then(() => { setNewTaskTitle(''); getTasks(); });
  };

  return (
    <div className="App">
      <h1>DevOps Project</h1>
      <h1>My Tasks</h1>

      <TasksList tasks={tasks} updateTasks={getTasks} />

      <form onSubmit={clickAddTask}>
        <input
          type="text"
          size="30"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={event => setNewTaskTitle(event.target.value)}
        />
        <input className="btn-primary" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default App;
