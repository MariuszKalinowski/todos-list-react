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

  return (
    <div className="container">
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />} />
    </div>
  );
}

export default App;
