import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";
import Container from "./Container";
import React, {useState} from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Time to eat your lunch", done: true },
    { id: 2, content: "Go to take a shower!", done: false},
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks, 
      {
        content, 
        done: false, 
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <Container>
        <Header title="Tasks list" />
        <Section 
          title="Add new task"
          body={<Form addNewTask={addNewTask}/>} 
        />

        <Section 
          title="Tasks list"
          body={
          <Tasks 
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} 
          />
        }
          extraHeaderContent={
          <Buttons 
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        />
    </Container>
  );
}

export default App;
