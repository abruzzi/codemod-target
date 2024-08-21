import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 rounded-r"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
