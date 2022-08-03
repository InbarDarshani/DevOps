import React from 'react';
import { API_BASE_URL } from '../config';

const TaskList = ({ tasks, updateTasks }) => {
  const clickDeleteTask = (event, task) => {
    event.preventDefault();

    axios.delete(`${API_BASE_URL}/api/tasks/delete/${task._id}`)
      .then(res => updateTasks(res.data));
  };

  const toggleDone = task => {
    axios.post(`${API_BASE_URL}/api/tasks/update/${task._id}`, { done: !task.done })
      .then(() => updateTasks());
  };

  return (
    <ul className="tasks">
      {tasks.map(task => (
        <li key={task._id}>
          <label className={task.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task)}
            />{' '}
            {task.title}
            <svg
              onClick={event => clickDeleteTask(event, task)}
              className="delete-button"
              width="16"
              height="16"
              viewBox="0 0 12 16"
            >
              <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path>
            </svg>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
