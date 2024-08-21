import React from 'react';
import Task from './Task';

function TaskList({ tasks, onTaskUpdate }) {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskUpdate={onTaskUpdate} />
      ))}
    </ul>
  );
}

export default TaskList;
