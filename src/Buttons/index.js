import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="section__renderButtons">
            <button onClick={toggleHideDone} className="form__renderButton"> {hideDone ? "Pokaż" : "Ukryj"} ukończone </button>
            <button onClick={setAllDone} className="form__renderButton" disabled={tasks.every(({ done }) => done)}
            > Ukończ wszystkie </button>
        </div>
    )
);


export default Buttons;