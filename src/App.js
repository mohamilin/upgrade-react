import Todos from "./components/Todos";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todos text="Learn React" />
      <Todos text="Learn NodeJs" />
      <Todos text="TodosAPP" />

    </div>
  );
}

export default App;
