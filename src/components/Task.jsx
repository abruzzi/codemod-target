import React from 'react';
import { ConvertType, convertTitle } from '../utils/convert';

function Task({ task, onTaskUpdate }) {
  const handleTitleChange = (type) => {
    const updatedTitle = convertTitle(task.title, type);
    onTaskUpdate(task.id, updatedTitle);
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <span>{task.title}</span>
      <div>
        <button
          onClick={() => handleTitleChange(ConvertType.UPPER)}
          className="text-blue-500"
        >
          UPPER
        </button>
        <button
          onClick={() => handleTitleChange(ConvertType.LOWER)}
          className="ml-2 text-green-500"
        >
          LOWER
        </button>
      </div>
    </li>
  );
}

export default Task;
