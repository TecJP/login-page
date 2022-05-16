import { useAuth } from "./hooks/useAuth";

function App() {
  const { CreateUserWithEmailAndPassword } = useAuth();

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
