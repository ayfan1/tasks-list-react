import React, { useRef, useState } from "react";
import { Button, StyledForm, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim();

        if (!trimedNewTaskContent) {
            return;
        }

        addNewTask(trimedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input 
                ref={inputRef}
                value={newTaskContent} 
                placeholder="What you've to do? " 
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <Button>Add tasks</Button>
        </StyledForm>
    );
};

export default Form;