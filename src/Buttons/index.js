import React from "react";
import { Button, Wrapper } from "./styled";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => (
    <Wrapper>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
                    {hideDone ? "Show" : "Hide"} completed
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Complete all
                </Button>
            </>
        )}
    </Wrapper>        
);


export default Buttons;