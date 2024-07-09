import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div>
      <CreateTodo />
      <Todos 
        todos={[
          {
            title: "hi",
            description: "jwepvdcs",
            completed: true,
          },
          {
            title: "hi2",
            description: "jwepvdcs2",
            completed: false,
          },
        ]}
      />
    </div>
  );
}

export default App;
