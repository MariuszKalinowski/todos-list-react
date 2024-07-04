import React, { useState } from 'react';
import Form from "./Form";
import "./Form/style.css";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na react", done: false },
    { id: 2, content: "Zjeść kolację", done: true },
  ])
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
  };

  const addNewTask = (newTaskContent) => {
    if (newTaskContent === "") {
      return;
    }

    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return (
    <div className="container">
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />

      <Section
        title="Lista zadań"
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />} />
    </div>
  );
}

export default App;
