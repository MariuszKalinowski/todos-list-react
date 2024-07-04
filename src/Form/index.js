import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <div className="form__element--first">
                <input
                    value={newTaskContent}
                    className="form__newTask"
                    placeholder="Co jest do zrobienia?"
                    onChange={({ target }) => setNewTaskContent(target.value)}
                />
                <button className="form__submit">Dodaj zadanie</button>
            </div>
        </form>
    );
};


export default Form;