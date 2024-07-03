import React, { useState } from 'react';
import Form from "./Form";
import "./Form/style.css";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";

const tasks = [
  { id: 1, content: "Przejść na react", done: false },
  { id: 2, content: "Zjeść kolację", done: true },
];


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  return (
    <div className="container">
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />} />
    </div>
  );
}

export default App;
