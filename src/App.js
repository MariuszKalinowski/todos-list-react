import Form from "./Form";
import "./Form/style.css";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";

const tasks = [
  { id: 1, content: "Przejść na react", done: false },
  { id: 2, content: "Zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div className="container">
      <Header title={"Lista zadań"} />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </div>
  );
}

export default App;
