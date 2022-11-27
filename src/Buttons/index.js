import React from "react";
import "./style.css"

const Buttons = ({tasks, hideDone, toggleHideDone}) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="button__button">
                    {hideDone ? "Show" : "Hide"} completed
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Complete all
                </button>
            </>
        )}
    </div>        
);


export default Buttons;