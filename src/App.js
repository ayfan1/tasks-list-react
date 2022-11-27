import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";
import Container from "./Container";
import React, {useState} from "react";


const tasks = [
  { id: 1, content: "Time to eat your lunch", done: true },
  { id: 2, content: "Go to take a shower!", done: false},
];


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
        <Header title="Tasks list" />
        <Section 
          title="Add new task"
          body={<Form />} 
        />

        <Section 
          title="Tasks list"
          body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
          extraHeaderContent={
          <Buttons 
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone} 
          />
        }
        />
    </Container>
  );
}

export default App;
