import Buttons from "./Buttons";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Tasks from "./Tasks";
import Container from "./Container";


const tasks = [
  { id: 1, content: "Time to eat your lunch", done: true },
  { id: 2, content: "Go to take a shower!", done: false},
];

const hideDoneTasks = false;

function App() {
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
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
          extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        />
    </Container>
  );
}

export default App;
