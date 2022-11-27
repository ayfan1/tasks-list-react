import React, {useState} from "react";
import "./style.css"

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                value={newTaskContent}
                className="form__input" 
                placeholder="What you've to do? " 
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Add tasks</button>
        </form>
    );
};

export default Form;