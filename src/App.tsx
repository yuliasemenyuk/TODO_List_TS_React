import TodoList from "./components/TodoList";

function App() {
  const todos = [
    { id: "t1", text: "Finish the cource" },
    { id: "t2", text: "Be happy" },
  ];
  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
