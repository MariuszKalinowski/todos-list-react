import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <span className="section__renderButtons">
            <button className="form__renderButton"> {hideDone ? "Pokaż" : "Ukryj"} ukończone </button>
            <button className="form__renderButton" disabled={tasks.every(({ done }) => done)}
            > Ukończ wszystkie </button>
        </span>
    )
);


export default Buttons;