import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone}) => (
    tasks.length > 0 && (
        <span className="section__renderButtons">
            <button onClick={toggleHideDone} className="form__renderButton"> {hideDone ? "Pokaż" : "Ukryj"} ukończone </button>
            <button className="form__renderButton" disabled={tasks.every(({ done }) => done)}
            > Ukończ wszystkie </button>
        </span>
    )
);


export default Buttons;