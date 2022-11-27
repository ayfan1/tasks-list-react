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


function App() {
  const hideDone = false;
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
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
        />
    </Container>
  );
}

export default App;
