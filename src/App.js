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

const hideDone = false;

function App() {
  return (
    <div className="container">
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />} />
    </div>
  );
}

export default App;
