import React from "react";
import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="button__button">
                    {hideDoneTasks ? "Show" : "Hide"} completed
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