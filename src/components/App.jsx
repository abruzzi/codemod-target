import React, { useState } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import Footer from './Footer';

const initialState = [
  {
    id: 100,
    title: 'Buy some milk'
  },
  {
    id: 101,
    title: 'Test out hypermod'
  }
];

function App() {
  const [tasks, setTasks] = useState(initialState);

  const addTask = (title) => {
    const newTask = { id: tasks.length + 1, title };
    setTasks([...tasks, newTask]);
  };

  const updateTaskTitle = (id, updatedTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: updatedTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onTaskUpdate={updateTaskTitle} />
      <Footer />
    </div>
  );
}

export default App;
